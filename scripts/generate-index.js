const fs = require('fs');
const path = require('path');

// Configuration
const slidesDir = path.join(__dirname, '../slides');
const outputPath = path.join(__dirname, '../dist/index.html');
const distDir = path.join(__dirname, '../dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Get all markdown files in slides directory
const slideFiles = fs.readdirSync(slidesDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const filePath = path.join(slidesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Try to extract title from markdown frontmatter or first # heading
    let title = file.replace('.md', '');
    const titleMatch = content.match(/^#\s+(.+?)$/m) || content.match(/title:\s*["']?([^"'\n]+)["']?/m);
    if (titleMatch) {
      title = titleMatch[1].trim();
    }
    
    const htmlFilename = file.replace('.md', '.html');
    
    return {
      title,
      mdFile: file,
      htmlFile: htmlFilename
    };
  });

// Create HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Deck Index</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
    }
    h1 {
      border-bottom: 2px solid #eaecef;
      padding-bottom: 0.3em;
    }
    ul {
      padding-left: 2rem;
    }
    li {
      margin-bottom: 0.5rem;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .description {
      color: #586069;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <h1>Slide Deck Index</h1>
  <p>Select a slide deck to view:</p>
  <ul>
    ${slideFiles.map(slide => `
    <li>
      <a href="./${slide.htmlFile}">${slide.title}</a>
      <span class="description">(${slide.mdFile})</span>
    </li>`).join('')}
  </ul>
  <footer>
    <p><small>Generated at: ${new Date().toLocaleString()}</small></p>
  </footer>
</body>
</html>`;

// Write the index.html file
fs.writeFileSync(outputPath, htmlContent);

console.log(`Index file generated at ${outputPath}`);