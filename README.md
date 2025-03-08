# slide-deck
Presentation slides built with Marp CLI and deployed to GitHub Pages.

## Setup

This project uses [Marp](https://marp.app/) to create presentation slides from Markdown files.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Preview slides locally:
   ```bash
   npm run preview
   ```

3. Build slides:
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

This repository is configured to automatically deploy slides to GitHub Pages when changes are pushed to the main branch. The following steps happen automatically via GitHub Actions:

1. Marp CLI converts Markdown files in the `slides/` directory to HTML
2. The generated HTML files are deployed to GitHub Pages

## Creating New Slides

1. Create a new Markdown file in the `slides/` directory
2. Add the Marp header to your file:
   ```markdown
   ---
   marp: true
   ---
   ```
3. Add your slide content using Markdown with slide separators (`---`)
4. Push to main branch to deploy
