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
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../css/global.css'
  ],
  globalScripts: [
    '../../../node_modules/jquery/dist/jquery.min.js',
    '../../../node_modules/popper.js/dist/umd/popper.min.js',
    '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
  ],
  imports: [
    {
      component: require('../../components/head-tag/head-tag.quoia'),
      values: {
        title: `${globalValues.title} - Home`
      }
    },
    require('../../components/sidebar/sidebar.quoia')
  ]
});

module.exports = HomePage;
