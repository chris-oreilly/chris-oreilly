const path = require('path');
const fs = require('fs-extra');
const Inliner = require('inliner');

const assets = 'assets';
const src = 'src';
const dest = 'dist';

fs.emptyDirSync(dest);

fs.copy(assets, dest);

new Inliner(path.join(src, 'index.html'), function(err, html) {
  fs.writeFile(path.join(dest, 'index.html'), html);
});
