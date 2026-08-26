const fs = require('fs');
const path = require('path');

// Configuration
const slidesDir = path.join(__dirname, '../slides');
const outputPath = path.join(__dirname, '../dist/index.html');
const distDir = path.join(__dirname, '../dist');
const templatePath = path.join(__dirname, 'index.template.html');
const externalSlidesPath = path.join(slidesDir, 'external-slides.json');

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/300x200?text=Image+Not+Found';

// Human-readable labels for known external sources
const SOURCE_LABELS = {
  speakerdeck: 'SpeakerDeck',
  slideshare: 'SlideShare',
  docswell: 'Docswell',
  googleslides: 'Google Slides',
};

/**
 * Format a date value into the ja-JP display string used across the gallery.
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date) {
  return date.toLocaleDateString('ja-JP');
}

/**
 * Infer a source key (e.g. "speakerdeck") from an external URL host.
 * @param {string} url
 * @returns {string}
 */
function inferSource(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (host.includes('speakerdeck')) return 'speakerdeck';
    if (host.includes('slideshare')) return 'slideshare';
    if (host.includes('docswell')) return 'docswell';
    if (host.includes('slides.google') || host.includes('docs.google')) return 'googleslides';
    return host.split('.')[0];
  } catch {
    return 'external';
  }
}

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
      image = PLACEHOLDER_IMAGE;
    }

    // Extract created date from frontmatter or fallback to file stats
    const sortDate = frontmatter.date ? new Date(frontmatter.date) : stats.birthtime;
    const createdDate = formatDate(sortDate);

    const htmlFilename = file.replace('.md', '.html');

    // get 'hide' frontmatter option (boolean)
    const hide = frontmatter.hide === 'true';

    return {
      title,
      href: `./${htmlFilename}`,
      label: file.replace('.md', ''),
      createdDate,
      sortDate,
      image,
      external: false,
      source: 'local',
      hide
    };
  });

/**
 * Load externally hosted slides (SpeakerDeck, SlideShare, ...) from the
 * config file and normalize them into the same shape as local slides.
 * @returns {Array<Object>}
 */
function loadExternalSlides() {
  if (!fs.existsSync(externalSlidesPath)) return [];

  let entries;
  try {
    entries = JSON.parse(fs.readFileSync(externalSlidesPath, 'utf-8'));
  } catch (err) {
    console.warn(`Skipping external slides: failed to parse ${externalSlidesPath}: ${err.message}`);
    return [];
  }

  if (!Array.isArray(entries)) return [];

  return entries
    .filter(entry => entry && entry.url)
    .map(entry => {
      if (!entry.title) {
        console.warn(`Skipping external slide without title: ${entry.url}`);
        return null;
      }

      const source = entry.source || inferSource(entry.url);
      const sortDate = entry.date ? new Date(entry.date) : new Date(0);

      return {
        title: entry.title,
        href: entry.url,
        label: SOURCE_LABELS[source] || source,
        createdDate: entry.date ? formatDate(sortDate) : '',
        sortDate,
        image: entry.image || PLACEHOLDER_IMAGE,
        external: true,
        source,
        hide: entry.hide === true
      };
    })
    .filter(Boolean);
}

// Merge local and external slides into a single gallery list
const allSlides = slideFiles.concat(loadExternalSlides());

// Sort slides by creation date, newest first
allSlides.sort((a, b) => b.sortDate - a.sortDate);

// if hide is true, remove the slide from the list
const visibleSlides = allSlides.filter(slide => !slide.hide);

// Generate slides HTML content
const slidesContent = visibleSlides.map(slide => {
  const linkAttrs = slide.external
    ? ` target="_blank" rel="noopener noreferrer"`
    : '';
  const sourceBadge = slide.external
    ? `<span class="card-source">${slide.label}</span>`
    : '';
  const dateLine = slide.createdDate
    ? `<div class="card-date">Created: ${slide.createdDate}</div>`
    : '';

  return `
    <a href="${slide.href}" class="card fade-in"${linkAttrs}>
      <div class="card-media">
        <img src="${slide.image}"
             alt="Cover for ${slide.title}"
             class="card-image"
             onerror="this.onerror=null; this.src='${PLACEHOLDER_IMAGE}'; this.alt='Image not found';">
        ${sourceBadge}
      </div>
      <div class="card-content">
        <h2 class="card-title">${slide.title}</h2>
        ${dateLine}
        <div class="card-filename">${slide.label}</div>
      </div>
    </a>`;
}).join('');

// Read the template file
let template = fs.readFileSync(templatePath, 'utf-8');

// Replace placeholders with actual content
template = template.replace('{{SLIDES_CONTENT}}', slidesContent);
template = template.replace('{{UPDATED_DATE}}', new Date().toLocaleString('ja-JP'));

// Write the index.html file
fs.writeFileSync(outputPath, template);

console.log(`Gallery index file generated at ${outputPath}`);