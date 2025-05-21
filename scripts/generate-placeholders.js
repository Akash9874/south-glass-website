const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Get project data
const projectsData = require('../src/data/projects');

// Define paths
const projectsDirectory = path.join(__dirname, '../public/projects');

// Ensure directory exists
if (!fs.existsSync(projectsDirectory)) {
  fs.mkdirSync(projectsDirectory, { recursive: true });
}

// Function to generate a placeholder image
function generatePlaceholderImage(id, category) {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background color based on category
  let bgColor = '#1A365D'; // Default blue for architecture
  if (category.includes('Automotive')) {
    bgColor = '#2D3748'; // Gray for automotive
  } else if (category.includes('Locomotive')) {
    bgColor = '#1E3A8A'; // Dark blue for locomotive
  } else if (category.includes('Navimotive')) {
    bgColor = '#065F46'; // Green for navimotive
  }

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Add some design elements
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.arc(width/2, height/2, Math.min(width, height) * 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Project: ${id}`, width/2, height/2 - 30);
  
  ctx.font = '30px Arial';
  ctx.fillText(`Category: ${category}`, width/2, height/2 + 30);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(projectsDirectory, `${id}.jpg`), buffer);
  console.log(`Generated placeholder for ${id}`);
}

// Generate placeholders for each project
projectsData.projects.forEach(project => {
  generatePlaceholderImage(project.id, project.categories.join(', '));
});

console.log('All placeholders generated!'); 