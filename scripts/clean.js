// scripts/clean.js
const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning ALL generated files...');

const publicDir = path.join(__dirname, '../public');

// Delete ALL sitemap and robots files
const patternsToDelete = [
  'sitemap*.xml',
  'robots.txt'
];

if (fs.existsSync(publicDir)) {
  try {
    const files = fs.readdirSync(publicDir);
    let deletedCount = 0;
    
    files.forEach(file => {
      // Delete ANY sitemap file
      if (file.includes('sitemap') && file.endsWith('.xml')) {
        const filePath = path.join(publicDir, file);
        fs.unlinkSync(filePath);
        console.log(`✅ Deleted: ${file}`);
        deletedCount++;
      }
      // Delete robots.txt
      if (file === 'robots.txt') {
        const filePath = path.join(publicDir, file);
        fs.unlinkSync(filePath);
        console.log(`✅ Deleted: ${file}`);
        deletedCount++;
      }
    });
    
    console.log(`🗑️ Deleted ${deletedCount} files`);
  } catch (err) {
    console.log('⚠️ Error cleaning public directory:', err.message);
  }
}

// Also clean .next cache (important!)
const nextDir = path.join(__dirname, '../.next');
if (fs.existsSync(nextDir)) {
  console.log('⚠️ Note: For complete cleanup, also delete .next folder');
  console.log('   Run: rm -rf .next  or  rmdir /s /q .next');
}

console.log('🎉 Cleanup complete!');