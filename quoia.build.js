// Imports
const { build } = require('quoia');
const path = require('path');

// Quoia config
const config = {
  outDir: './docs',
  rootPage: require('./src/pages/home/home.quoia'),
  templatingEngine: 'handlebars',
  assets: './src/assets',
  cssPreprocessor: 'sass',
  cssIncludePaths: [
    path.join(__dirname, './node_modules'),
    path.join(__dirname, './src')
  ]
};

// Execute Quoia build
build(config);
