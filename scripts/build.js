const path = require('path');
const fs = require('fs-extra');
const Inliner = require('inliner');

const src = 'src';
const dest = 'dist';

const assets = [
  'robots.txt',
  'favicon.png',
];

fs.emptyDirSync(dest);

assets.forEach(file => {
  fs.copy(path.join(src, file), path.join(dest, file));
});

new Inliner(path.join(src, 'index.html'), function(err, html) {
  fs.writeFile(path.join(dest, 'index.html'), html);
});
