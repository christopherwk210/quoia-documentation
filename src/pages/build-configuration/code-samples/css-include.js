// Imports
const { build } = require('quoia');
const path = require('fs');

// Configuration
let config = {
  outDir: './dist',
  rootPage: require('./src/home.quoia'),
  cssPreprocessor: 'sass',
  cssIncludePaths: [
    path.join(__dirname, './node_modules'),
  ]
};

// Build with Quoia
build(config);
