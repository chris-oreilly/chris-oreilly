const path = require('path');
const fs = require('fs-extra');
const Inliner = require('inliner');

const assets = 'assets';
const src = 'src';
const dest = 'dist';

fs.emptyDirSync(dest);

fs.copy(assets, dest);
fs.copy(path.join(assets, '.htaccess'), dest);

new Inliner(path.join(src, 'index.html'), function(err, html) {
  fs.writeFile(path.join(dest, 'index.html'), html);
});

new Inliner(path.join(src, 'error404.html'), function(err, html) {
  fs.writeFile(path.join(dest, 'error404.html'), html);
});
