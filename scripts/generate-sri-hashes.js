/**
 * Script to generate SRI hashes for PDF brochures
 * Run this script during build to create or update the SRI hashes
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Path to brochures directory relative to the project root
const BROCHURES_DIR = 'public/brochures';
// Path to the output file that will contain the SRI hashes
const OUTPUT_FILE = 'src/lib/sri/brochureSRI.ts';

/**
 * Generate an SRI hash for a file
 */
function generateSRIHash(filePath) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const hash = crypto.createHash('sha384');
    hash.update(fileBuffer);
    return `sha384-${hash.digest('base64')}`;
  } catch (error) {
    console.error(`Error generating hash for ${filePath}:`, error);
    return '';
  }
}

/**
 * Main function to generate SRI hashes for all PDFs
 */
function main() {
  console.log('Generating SRI hashes for brochures...');
  
  const brochuresPath = path.join(__dirname, '..', BROCHURES_DIR);
  const outputFilePath = path.join(__dirname, '..', OUTPUT_FILE);
  
  try {
    // Read the brochures directory
    const files = fs.readdirSync(brochuresPath);
    
    // Generate hashes for all PDF files
    const hashes = {};
    for (const file of files) {
      if (file.toLowerCase().endsWith('.pdf')) {
        const filePath = path.join(brochuresPath, file);
        const hash = generateSRIHash(filePath);
        const publicPath = `/brochures/${file}`;
        hashes[publicPath] = hash;
        console.log(`Generated hash for ${publicPath}: ${hash}`);
      }
    }
    
    // Read the existing file to preserve imports and function definitions
    let fileContent = '';
    try {
      fileContent = fs.readFileSync(outputFilePath, 'utf8');
    } catch (error) {
      // If file doesn't exist, create a new one with the imports
      fileContent = `import { generateSRIHashesForDirectory } from './generateHash';\n\n`;
    }
    
    // Find the line where the hashes object is defined
    const hashesObjectPattern = /export const brochureSRIHashes: Record<string, string> = \{[\s\S]*?\};/;
    
    // Create the new hashes object
    const hashesObjectString = `export const brochureSRIHashes: Record<string, string> = ${JSON.stringify(hashes, null, 2)};`;
    
    // Replace the existing hashes object or add it if it doesn't exist
    if (hashesObjectPattern.test(fileContent)) {
      fileContent = fileContent.replace(hashesObjectPattern, hashesObjectString);
    } else {
      fileContent += `\n${hashesObjectString}\n\n`;
      fileContent += `
/**
 * Function to generate SRI hashes for all brochures
 * This can be called during build time to update the hashes
 */
export function generateBrochureSRIHashes(): Record<string, string> {
  return generateSRIHashesForDirectory('/brochures');
}

/**
 * Get SRI hash for a specific brochure
 * @param path - Path to the brochure file
 * @returns SRI hash or empty string if not found
 */
export function getBrochureSRIHash(path: string): string {
  return brochureSRIHashes[path] || '';
}\n`;
    }
    
    // Write the updated file
    fs.writeFileSync(outputFilePath, fileContent);
    console.log(`Updated SRI hashes in ${OUTPUT_FILE}`);
    
  } catch (error) {
    console.error('Error generating SRI hashes:', error);
  }
}

// Run the script
main(); 