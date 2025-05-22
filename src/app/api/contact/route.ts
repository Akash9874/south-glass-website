import { NextRequest, NextResponse } from 'next/server';
import { SHA256 } from 'crypto-js';
import crypto from 'crypto';

// Ensure all API responses have proper security headers
const securityHeaders = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

/**
 * Safely compare two strings in constant time to prevent timing attacks
 * @param a First string to compare
 * @param b Second string to compare
 * @returns Whether the strings are equal
 */
function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  
  return crypto.timingSafeEqual(
    Buffer.from(a, 'utf8'),
    Buffer.from(b, 'utf8')
  );
}

export async function POST(request: NextRequest) {
  try {
    // Get cookies from the request
    const cookieStore = request.cookies;
    
    // Get the request body
    const body = await request.json();
    
    // Extract data
    const { 
      name, 
      email, 
      phone, 
      company, 
      inquiryType, 
      message,
      csrf_token
    } = body;
    
    // Server-side validation
    if (!name || !email || !phone || !inquiryType || !message || !csrf_token) {
      return new NextResponse(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields' 
        }),
        { 
          status: 400, 
          headers: securityHeaders 
        }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new NextResponse(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid email format' 
        }),
        { 
          status: 400, 
          headers: securityHeaders 
        }
      );
    }
    
    // CSRF validation - in a production environment, this would:
    // 1. Use a server-side session store or secure cookie to validate the token
    // 2. Apply Double Submit Cookie pattern
    // 3. Have proper token expiration
    
    // For now, we'll check that the token exists and has proper format
    if (!csrf_token || typeof csrf_token !== 'string' || csrf_token.length < 16) {
      return new NextResponse(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid CSRF token' 
        }),
        { 
          status: 403,  // Forbidden
          headers: securityHeaders 
        }
      );
    }
    
    // In a real-world implementation, you would:
    // 1. Send an email
    // 2. Store the inquiry in a database
    // 3. Possibly notify your team via webhook or other integration
    
    // For demo purposes, we're just logging it
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      inquiryType,
      message,
      timestamp: new Date().toISOString()
    });
    
    // Return success response
    return new NextResponse(
      JSON.stringify({ 
        success: true, 
        message: 'Your message has been received! We will get back to you soon.' 
      }),
      { 
        status: 200, 
        headers: securityHeaders 
      }
    );
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Return generic error to avoid leaking internal information
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        error: 'An error occurred while processing your request' 
      }),
      { 
        status: 500, 
        headers: securityHeaders 
      }
    );
  }
}