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

/**
 * Parse frontmatter from markdown content
 * @param {string} content - The markdown content
 * @returns {Object} The parsed frontmatter as object
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return {};
  
  const frontmatterText = match[1];
  const frontmatter = {};
  
  // Split by lines and process each key-value pair
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      frontmatter[key] = value;
    }
  });
  
  return frontmatter;
}

// Get all markdown files in slides directory
const slideFiles = fs.readdirSync(slidesDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const filePath = path.join(slidesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const stats = fs.statSync(filePath);
    
    // Parse frontmatter
    const frontmatter = parseFrontmatter(content);
    
    // Extract title from frontmatter or fallback to markdown heading or filename
    let title = frontmatter.title;
    if (!title) {
      const titleMatch = content.match(/^#\s+(.+?)$/m);
      title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '');
    }
    
    // Extract cover image from frontmatter or fallback to first image in content
    let image = frontmatter.image;
    if (!image) {
      const imageMatch = content.match(/!\[.*?\]\((.+?)\)/);
      image = imageMatch ? imageMatch[1] : null;
    }

    // If no image found, use a placeholder
    if (!image) {
      image = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
    }
    
    // Extract created date from frontmatter or fallback to file stats
    const createdDate = frontmatter.date 
      ? new Date(frontmatter.date).toLocaleDateString('ja-JP')
      : stats.birthtime.toLocaleDateString('ja-JP');
    
    const htmlFilename = file.replace('.md', '.html');
   
    // get 'hide' frontmatter option (boolean)
    const hide = frontmatter.hide === 'true';

    return {
      title,
      mdFile: file,
      htmlFile: htmlFilename,
      createdDate,
      image,
      hide
    };
  });

// Sort slides by creation date, newest first
slideFiles.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

// if hide is true, remove the slide from the list
const visibleSlides = slideFiles.filter(slide => !slide.hide);

// Generate slides HTML content
const slidesContent = visibleSlides.map(slide => `
    <a href="./${slide.htmlFile}" class="card">
      <img src="${slide.image}" 
           alt="Cover for ${slide.title}" 
           class="card-image"
           onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'; this.alt='Image not found';">
      <div class="card-content">
        <h2 class="card-title">${slide.title}</h2>
        <div class="card-date">Created: ${slide.createdDate}</div>
        <div class="card-filename">${slide.mdFile.replace('.md', '')}</div>
      </div>
    </a>`).join('');

// Read the template file
let template = fs.readFileSync(templatePath, 'utf-8');

// Replace placeholders with actual content
template = template.replace('{{SLIDES_CONTENT}}', slidesContent);
template = template.replace('{{UPDATED_DATE}}', new Date().toLocaleString('ja-JP'));

// Write the index.html file
fs.writeFileSync(outputPath, template);

console.log(`Gallery index file generated at ${outputPath}`);