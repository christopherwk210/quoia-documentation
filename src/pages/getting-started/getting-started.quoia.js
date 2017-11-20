// Imports
const { Component } = require('quoia');
const fs = require('fs');
const path = require('path');

// Import global values
const globalValues = require('../../config/global-values');

/**
 * GettingStartedPage
 * Getting started page of the documentation
 */
let GettingStartedPage = new Component({
  template: './getting-started.handlebars',
  name: 'getting-started',
  globalStyles: [
    '../../css/prism.scss'
  ],
  externalScripts: [
    '../../../node_modules/prismjs/prism.js'
  ],
  imports: [
    {
      component: require('../../components/head-tag/head-tag.quoia'),
      values: {
        title: `${globalValues.title} - Getting Started`
      }
    },
    {
      component: require('../../components/sidebar/sidebar.quoia'),
      values: {
        gettingStarted: true
      }
    }
  ],
  values: {
    buildScriptSample: readFileSync('./code-samples/build-script-sample.js'),
    homeComponentSample: readFileSync('./code-samples/home-component-sample.js'),
    homeTemplateSample: readFileSync('./code-samples/home-template-sample.html'),
    aboutComponentSample: readFileSync('./code-samples/about-component-sample.js'),
    aboutTemplateSample: readFileSync('./code-samples/about-template-sample.html'),
    homeComponentSample2: readFileSync('./code-samples/home-component-sample2.js'),
    headComponentSample: readFileSync('./code-samples/head-component-sample.js'),
    headTemplateSample: readFileSync('./code-samples/head-template-sample.html'),
    homeTemplateRevised: readFileSync('./code-samples/home-template-revised.html'),
    aboutTemplateRevised: readFileSync('./code-samples/about-template-revised.html')
  }
});

/**
 * Wrapper for fs.readFileSync
 * @param {string} file Relative file path
 */
function readFileSync(file) {
  return fs.readFileSync(path.join(__dirname, file), { encoding: 'utf8' });
}

module.exports = GettingStartedPage;
