// Imports
const { build } = require('quoia');

// Configuration
let config = {
  outDir: './dist',
  rootPage: require('./src/home.quoia')
};

// Build with Quoia
build(config);
