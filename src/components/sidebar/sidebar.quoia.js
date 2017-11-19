// Import Quoia
const { Component } = require('quoia');

/**
 * SidebarComponent
 * Defines the sidebar component
 */
let SidebarComponent = new Component({
  template: './sidebar.handlebars',
  name: 'sidebar',
  selector: 'quoia-sidebar',
  externalStyles: [
    './sidebar.scss'
  ]
});

module.exports = SidebarComponent;
