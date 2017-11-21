// Import Quoia
const { Component } = require('quoia');

// Import global values
const globalValues = require('../../config/global-values');

/**
 * HomePage
 * Root page of the documentation
 */
let HomePage = new Component({
  template: './home.html',
  name: 'home',
  globalStyles: [
    '../../css/global.scss'
  ],
  globalScripts: [
    '../../../node_modules/jquery/dist/jquery.min.js',
    '../../../node_modules/popper.js/dist/umd/popper.min.js',
    '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
  ],
  externalStyles: [
    './home.scss'
  ],
  imports: [
    {
      component: require('../../components/head-tag/head-tag.quoia'),
      values: {
        title: `${globalValues.title} - Home`
      }
    },
    {
      component: require('../../components/sidebar/sidebar.quoia'),
      values: {
        home: true
      }
    }
  ],
  children: [
    require('../getting-started/getting-started.quoia'),
    require('../build-configuration/build-configuration.quoia')
  ]
});

module.exports = HomePage;
