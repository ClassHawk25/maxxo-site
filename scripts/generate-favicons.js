const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// ============================================================================
// FAVICON GENERATOR
// Run: node scripts/generate-favicons.js
// Requires: favicon.svg or favicon-256.png in /public folder
// ============================================================================

const publicDir = path.join(__dirname, '..', 'public');
const svgSource = path.join(publicDir, 'favicon.svg');
const pngSource = path.join(publicDir, 'favicon-256.png');

// Use SVG if available, otherwise PNG
const sourceFile = fs.existsSync(svgSource) ? svgSource : pngSource;
const isSvg = sourceFile === svgSource;

async function generateFavicons() {
  // Check if source file exists
  if (!fs.existsSync(sourceFile)) {
    console.error('Error: No favicon source found in /public folder');
    console.log('Please place either "favicon.svg" or "favicon-256.png" in the /public folder');
    process.exit(1);
  }

  console.log(`Using source: ${isSvg ? 'favicon.svg' : 'favicon-256.png'}`);

  // For SVG, we need to specify a larger size first for quality
  const inputOptions = isSvg ? { density: 300 } : {};

  console.log('Generating favicons...\n');

  try {
    // Generate favicon-16x16.png
    await sharp(sourceFile, inputOptions)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✓ Generated favicon-16x16.png');

    // Generate favicon-32x32.png
    await sharp(sourceFile, inputOptions)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✓ Generated favicon-32x32.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(sourceFile, inputOptions)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png (180x180)');

    // Generate favicon.ico (32x32 PNG saved as .ico)
    // Note: This creates a PNG with .ico extension which works in most browsers
    // For a true multi-size .ico file, you'd need a different library
    await sharp(sourceFile, inputOptions)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico (32x32)');

    console.log('\n✅ All favicons generated successfully!');
    console.log('Files created in /public:');
    console.log('  - favicon.ico');
    console.log('  - favicon-16x16.png');
    console.log('  - favicon-32x32.png');
    console.log('  - apple-touch-icon.png');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
