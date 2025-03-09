const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const faviconUrl = 'https://avatars.githubusercontent.com/u/26006414';

fs.readdir(distDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === '.html') {
      const filePath = path.join(distDir, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        const updatedData = data.replace(
          '</head>',
          `  <link rel="icon" href="${faviconUrl}" />\n</head>`
        );

        fs.writeFile(filePath, updatedData, 'utf8', err => {
          if (err) throw err;
          console.log(`Favicon added to ${file}`);
        });
      });
    }
  });
});
