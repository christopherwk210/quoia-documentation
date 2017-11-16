// Import Quoia
const { Component } = require('quoia');

// Import global values
const globalValues = require('../../config/global-values');

/**
 * HeadTagComponent
 * Defines the <head> tag of the document
 */
let HeadTagComponent = new Component({
  template: './head-tag.html',
  selector: 'quoia-head',
  name: 'head',
  values: {
    title: globalValues.title,
    description: globalValues.description
  }
});

module.exports = HeadTagComponent;
