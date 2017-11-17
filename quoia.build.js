// Imports
const { build } = require('quoia');

// Quoia config
const config = {
  outDir: './docs',
  rootPage: require('./src/pages/home/home.quoia'),
  templatingEngine: 'handlebars',
  assets: './src/assets'
};

// Execute Quoia build
build(config);
