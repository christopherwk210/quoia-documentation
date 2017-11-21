// Imports
const { Component } = require('quoia');
const fs = require('fs');
const path = require('path');

// Import global values
const globalValues = require('../../config/global-values');

/**
 * ComponentsPage
 */
let ComponentsPage = new Component({
  template: './components.handlebars',
  name: 'components',
  globalStyles: [
    '../../css/prism.scss'
  ],
  externalStyles: [
    './components.scss'
  ],
  externalScripts: [
    '../../../node_modules/prismjs/prism.js'
  ],
  imports: [
    {
      component: require('../../components/head-tag/head-tag.quoia'),
      values: {
        title: `${globalValues.title} - Components`,
        root: '..'
      }
    },
    {
      component: require('../../components/sidebar/sidebar.quoia'),
      values: {
        components: true,
        root: '..'
      }
    }
  ],
  values: {
    componentSample: readFileSync('../getting-started/code-samples/home-component-sample.js')
  }
});

/**
 * Wrapper for fs.readFileSync
 * @param {string} file Relative file path
 */
function readFileSync(file) {
  return fs.readFileSync(path.join(__dirname, file), { encoding: 'utf8' });
}

module.exports = ComponentsPage;
