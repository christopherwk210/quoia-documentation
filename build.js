// Import Quoia
const { build } = require('quoia');

// Create config
const config = {
  outDir: './docs',
  rootPage: require('./src/pages/home/home.quoia'),
  templatingEngine: 'handlebars',
  assets: './src/assets'
};

// Build
build(config);
