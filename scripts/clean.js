// scripts/clean.js
const fs = require('fs');
const path = require('path');

console.log('Cleaning sitemap files...');

const filesToDelete = [
  'public/sitemap.xml',
  'public/robots.txt'
];

// Delete specific files
filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted: ${file}`);
    } catch (err) {
      console.log(`✗ Error deleting ${file}:`, err.message);
    }
  }
});

// Delete sitemap-*.xml files
const publicDir = path.join(__dirname, '../public');
if (fs.existsSync(publicDir)) {
  try {
    const files = fs.readdirSync(publicDir);
    files.forEach(file => {
      if (file.startsWith('sitemap-') && file.endsWith('.xml')) {
        const filePath = path.join(publicDir, file);
        fs.unlinkSync(filePath);
        console.log(`✓ Deleted: public/${file}`);
      }
    });
  } catch (err) {
    console.log('✗ Error reading public directory:', err.message);
  }
}

console.log('Cleanup complete!');