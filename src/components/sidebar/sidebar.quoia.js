// Import Quoia
const { Component } = require('quoia');

/**
 * SidebarComponent
 * Defines the sidebar component
 */
let SidebarComponent = new Component({
  template: './sidebar.html',
  name: 'sidebar',
  selector: 'quoia-sidebar',
  externalStyles: [
    './sidebar.css'
  ],
  values: {
    pages: [
      'Overview'
    ]
  }
});

module.exports = SidebarComponent;
