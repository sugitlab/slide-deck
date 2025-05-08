<template>
  <div class="slidev-layout section">
    <slot />
  </div>
</template>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap');

.slidev-layout.section {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: start;
  font-family: var(--font-family);
  background-color: var(--color-bg-primary-light);
  background-image: url('https://raw.githubusercontent.com/sugitlab/slide-deck/refs/heads/main/slides/theme/light_bg_element.png');
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  color: var(--color-text-body-light);
  padding: 40px;
  position: relative;
}

.slidev-layout.section h1 {
  color: var(--color-text-description-light);
  font-size: 1em;
  font-weight: 700;
  padding-bottom: 8px;
  width: 100%;
  border-bottom: 1px solid var(--color-text-body-light);
}

.slidev-layout.section h1::after {
  content: '';
  width: 180px;
  height: 48px;
  position: absolute;
  right: 20px;
  top: 32px;
  background-image: url('https://raw.githubusercontent.com/sugitlab/slide-deck/refs/heads/main/slides/theme/logo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.slidev-layout.section h2 {
  color: var(--color-text-body-light);
  font-size: 1.5em;
  font-weight: 500;
}

.slidev-layout.section h3 {
  font-size: 1.0em;
  color: var(--color-text-description-light);
  margin-bottom: 0.5em;
  font-weight: 500;
}

.slidev-layout.section p {
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 1em;
}

.slidev-layout.section ul,
.slidev-layout.section ol {
  font-size: 1em;
  line-height: 1.5;
  margin-left: 1em;
  margin-bottom: 1em;
}

.slidev-layout.section li {
  margin-bottom: 0.5em;
}

.slidev-layout.section code {
  font-family: 'Monaco', 'Consolas', monospace;
  background-color: var(--color-bg-secondary-light);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

.slidev-layout.section pre {
  background-color: var(--color-bg-secondary-light);
  padding: 1em;
  border-radius: 5px;
  overflow: visible; /* Allow content to wrap instead of scrolling */
  width: 100%; /* Use full width of the slide */
  margin: 0 auto;
}

.slidev-layout.section table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;
}

.slidev-layout.section th {
  background-color: var(--color-bg-primary-light);
  color: var(--color-text-body-light);
  padding: 0.5em;
  text-align: left;
}

.slidev-layout.section td {
  border: 1px solid var(--color-bg-quaternary-light);
  padding: 0.5em;
}

.slidev-layout.section img {
  max-width: 100%;
  height: auto;
}

.slidev-layout.section blockquote {
  border-left: 5px solid var(--color-tt-success-90);
  padding-left: 1em;
  margin-left: 0;
  color: #666;
  font-style: italic;
}

.slidev-layout.section a {
  color: var(--color-tt-focus-50);
  text-decoration: none;
}

.slidev-layout.section a:hover {
  text-decoration: underline;
}
</style>