// Imports
const { Component } = require('quoia');

/**
 * HomePage
 * Root page of the website
 */
let HomePage = new Component({
  template: './home.html',
  name: 'home',
  children: [
    require('./pages/about/about.quoia')
  ]
});

module.exports = HomePage;
