// Import Quoia
const { Component } = require('quoia');

// Import global values
const globalValues = require('../../config/global-values');

/**
 * GettingStartedPage
 * Getting started page of the documentation
 */
let GettingStartedPage = new Component({
  template: './getting-started.html',
  name: 'getting-started',
  externalStyles: [
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
  ]
});

module.exports = GettingStartedPage;
