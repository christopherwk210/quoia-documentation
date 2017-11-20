// Imports
const { Component } = require('quoia');

/**
 * HeadTagComponent
 * Defines the <head> tag of the document
 */
let HeadTagComponent = new Component({
  template: './head-tag.html',
  name: 'head',
  selector: 'quoia-head'
});

module.exports = HeadTagComponent;
