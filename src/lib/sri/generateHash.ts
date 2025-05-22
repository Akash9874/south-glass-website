import * as fs from 'fs';
import * as crypto from 'crypto';
import * as path from 'path';

/**
 * Generate Subresource Integrity (SRI) hash for a file
 * @param filePath - Path to the file relative to the public directory
 * @returns SRI hash in the format 'sha384-[hash]'
 */
export function generateSRIHash(publicPath: string): string {
  try {
    // Get the absolute path to the file in the public directory
    const absolutePath = path.join(process.cwd(), 'public', publicPath);
    
    // Read the file
    const fileBuffer = fs.readFileSync(absolutePath);
    
    // Create a SHA-384 hash of the file content
    const hash = crypto.createHash('sha384');
    hash.update(fileBuffer);
    const digest = hash.digest('base64');
    
    // Return the SRI hash in the correct format
    return `sha384-${digest}`;
  } catch (error) {
    console.error(`Error generating SRI hash for ${publicPath}:`, error);
    return '';
  }
}

/**
 * Generate SRI hashes for all PDF files in a specified directory
 * @param directory - Directory path relative to the public directory
 * @returns Object with file paths as keys and SRI hashes as values
 */
export function generateSRIHashesForDirectory(directory: string): Record<string, string> {
  const result: Record<string, string> = {};
  
  try {
    const absolutePath = path.join(process.cwd(), 'public', directory);
    const files = fs.readdirSync(absolutePath);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.pdf')) {
        const filePath = path.join(directory, file);
        result[filePath] = generateSRIHash(filePath);
      }
    }
  } catch (error) {
    console.error(`Error generating SRI hashes for directory ${directory}:`, error);
  }
  
  return result;
} 