const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration
const IMAGE_DIR = path.join(process.cwd(), 'public');
const OUTPUT_DIR = path.join(process.cwd(), 'public/optimized');
const FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all image files
async function getImageFiles(dir) {
  const files = await readdir(dir);
  const imageFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);

    if (stats.isDirectory() && file !== 'optimized') {
      const subDirFiles = await getImageFiles(filePath);
      imageFiles.push(...subDirFiles);
    } else if (stats.isFile() && FORMATS.includes(path.extname(file).toLowerCase())) {
      imageFiles.push(filePath);
    }
  }

  return imageFiles;
}

// Optimize image
async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const outputPath = path.join(OUTPUT_DIR, fileName);
  
  try {
    await sharp(filePath)
      .resize(1920) // Max width while maintaining aspect ratio
      .webp({ quality: 80 }) // Convert to webp with 80% quality
      .toFile(outputPath.replace(path.extname(fileName), '.webp'));
    
    console.log(`Optimized: ${fileName}`);
  } catch (err) {
    console.error(`Error optimizing ${fileName}:`, err.message);
  }
}

// Main function
async function main() {
  try {
    const imageFiles = await getImageFiles(IMAGE_DIR);
    console.log(`Found ${imageFiles.length} images to optimize`);
    
    // Process images in batches to avoid memory issues
    const BATCH_SIZE = 5;
    for (let i = 0; i < imageFiles.length; i += BATCH_SIZE) {
      const batch = imageFiles.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map(optimizeImage));
    }
    
    console.log('Image optimization complete');
  } catch (err) {
    console.error('Error during image optimization:', err);
  }
}

main(); 