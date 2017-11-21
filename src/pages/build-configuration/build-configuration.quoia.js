// Imports
const { Component } = require('quoia');
const fs = require('fs');
const path = require('path');

// Import global values
const globalValues = require('../../config/global-values');

/**
 * BuildConfigurationPage
 */
let BuildConfigurationPage = new Component({
  template: './build-configuration.handlebars',
  name: 'build-config',
  globalStyles: [
    '../../css/prism.scss'
  ],
  externalScripts: [
    '../../../node_modules/prismjs/prism.js'
  ],
  externalStyles: [
    './build-config.scss'
  ],
  imports: [
    {
      component: require('../../components/head-tag/head-tag.quoia'),
      values: {
        title: `${globalValues.title} - Build Configuration`
      }
    },
    {
      component: require('../../components/sidebar/sidebar.quoia'),
      values: {
        buildConfiguration: true
      }
    }
  ],
  values: {
    buildScriptSample: readFileSync('../getting-started/code-samples/build-script-sample.js'),
    sassSample: readFileSync('./code-samples/css-include.js')
  }
});

/**
 * Wrapper for fs.readFileSync
 * @param {string} file Relative file path
 */
function readFileSync(file) {
  return fs.readFileSync(path.join(__dirname, file), { encoding: 'utf8' });
}

module.exports = BuildConfigurationPage;
