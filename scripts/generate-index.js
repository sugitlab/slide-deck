const fs = require('fs');
const path = require('path');

// Configuration
const slidesDir = path.join(__dirname, '../slides');
const outputPath = path.join(__dirname, '../dist/index.html');
const distDir = path.join(__dirname, '../dist');
const templatePath = path.join(__dirname, 'index.template.html');

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
    const createdDate = stats.birthtime.toLocaleDateString('en-GB');
    
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

// Fix the TypeError by converting the createdDate to a Date object before calling toLocaleDateString
slideFiles.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

// Generate slides HTML content
const slidesContent = slideFiles.map(slide => `
    <a href="./${slide.htmlFile}" class="card">
      <img src="${slide.coverImage}" alt="Cover for ${slide.title}" class="card-image">
      <div class="card-content">
        <h2 class="card-title">${slide.title}</h2>
        <div class="card-date">Created: ${new Date(slide.createdDate).toLocaleDateString('en-GB')}</div>
        <div class="card-filename">${slide.mdFile.replace('.md', '')}</div>
      </div>
    </a>`).join('');

// Read the template file
let template = fs.readFileSync(templatePath, 'utf-8');

// Replace placeholders with actual content
template = template.replace('{{SLIDES_CONTENT}}', slidesContent);
template = template.replace('{{UPDATED_DATE}}', new Date().toLocaleString('en-GB'));

// Write the index.html file
fs.writeFileSync(outputPath, template);

console.log(`Gallery index file generated at ${outputPath}`);