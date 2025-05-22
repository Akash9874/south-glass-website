'use client';

import { useEffect, useState } from 'react';
import { SHA256 } from 'crypto-js';

/**
 * Generate a cryptographically strong random CSRF token
 * @returns A random string to use as a CSRF token
 */
function generateToken(): string {
  // Generate 128 bits of random data (16 bytes)
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  
  // Convert to hex string
  return Array.from(array)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Get a hash of the token for additional security
 * @param token The token to hash
 * @returns A hash of the token
 */
function getTokenHash(token: string): string {
  return SHA256(token).toString();
}

/**
 * Custom hook to create and manage CSRF token
 * @returns CSRF token for form protection
 */
export function useCsrfToken(): string {
  const [token, setToken] = useState<string>('');
  
  useEffect(() => {
    // Check if a token already exists in sessionStorage
    let csrfToken = sessionStorage.getItem('csrf_token');
    
    // If no token exists, generate a new one
    if (!csrfToken) {
      csrfToken = generateToken();
      sessionStorage.setItem('csrf_token', csrfToken);
      
      // Store a hash of the token for server-side validation
      const tokenHash = getTokenHash(csrfToken);
      sessionStorage.setItem('csrf_token_hash', tokenHash);
    }
    
    setToken(csrfToken);
    
    // Refresh token after expiry or when page is navigated away and back
    const refreshInterval = 30 * 60 * 1000; // 30 minutes
    const intervalId = setInterval(() => {
      const newToken = generateToken();
      const newTokenHash = getTokenHash(newToken);
      sessionStorage.setItem('csrf_token', newToken);
      sessionStorage.setItem('csrf_token_hash', newTokenHash);
      setToken(newToken);
    }, refreshInterval);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return token;
}

/**
 * Validate a CSRF token against the stored token
 * @param token The token to validate
 * @returns Boolean indicating if the token is valid
 */
export function validateCsrfToken(token: string): boolean {
  const storedToken = sessionStorage.getItem('csrf_token');
  
  if (!storedToken || !token) {
    return false;
  }
  
  // Time-constant comparison to prevent timing attacks
  if (storedToken.length !== token.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < token.length; i++) {
    result |= storedToken.charCodeAt(i) ^ token.charCodeAt(i);
  }
  
  return result === 0;
} 