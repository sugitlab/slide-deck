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
    const stats = fs.statSync(filePath);
    const createdDate = stats.birthtime;
    
    // Try to extract title from markdown frontmatter or first # heading
    let title = file.replace('.md', '');
    const titleMatch = content.match(/^#\s+(.+?)$/m) || content.match(/title:\s*["']?([^"'\n]+)["']?/m);
    if (titleMatch) {
      title = titleMatch[1].trim();
    }
    
    // Try to extract cover image from markdown content
    // Look for image syntax in markdown: ![alt](url)
    let coverImage = null;
    const imageMatch = content.match(/!\[.*?\]\((.+?)\)/);
    if (imageMatch) {
      coverImage = imageMatch[1];
    }

    // If no image found in content, use a default placeholder
    if (!coverImage) {
      coverImage = 'https://via.placeholder.com/300x200?text=Slide+Deck';
    }
    
    const htmlFilename = file.replace('.md', '.html');
    
    return {
      title,
      mdFile: file,
      htmlFile: htmlFilename,
      createdDate,
      coverImage
    };
  });

// Sort slides by created date (newest first)
slideFiles.sort((a, b) => b.createdDate - a.createdDate);

// Create HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Deck Gallery</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
    }
    h1 {
      border-bottom: 2px solid #eaecef;
      padding-bottom: 0.3em;
      text-align: center;
      margin-bottom: 2rem;
    }
    .gallery {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .gallery {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .gallery {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .card {
      border: 1px solid #eaecef;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 1.5rem;
    }
    .card-title {
      font-size: 1.25rem;
      margin: 0 0 0.5rem;
    }
    .card-date {
      color: #586069;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }
    .card-filename {
      color: #586069;
      font-size: 0.8rem;
      margin-top: 1rem;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    footer {
      margin-top: 3rem;
      text-align: center;
      color: #586069;
    }
  </style>
</head>
<body>
  <h1>Slide Deck Gallery</h1>
  <div class="gallery">
    ${slideFiles.map(slide => `
    <a href="./${slide.htmlFile}" class="card">
      <img src="${slide.coverImage}" alt="Cover for ${slide.title}" class="card-image">
      <div class="card-content">
        <h2 class="card-title">${slide.title}</h2>
        <div class="card-date">Created: ${slide.createdDate.toLocaleDateString()}</div>
        <div class="card-filename">${slide.mdFile}</div>
      </div>
    </a>`).join('')}
  </div>
  <footer>
    <p><small>Generated at: ${new Date().toLocaleString()}</small></p>
  </footer>
</body>
</html>`;

// Write the index.html file
fs.writeFileSync(outputPath, htmlContent);

console.log(`Gallery index file generated at ${outputPath}`);