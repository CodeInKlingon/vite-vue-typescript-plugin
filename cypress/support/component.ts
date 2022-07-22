// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue'

import {default as library} from "../../src/entry.esm";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', (MountedComponent, options) => {

  //set up the default theme colors for cortex
  // SetupTheme();

  //if the "cb-app" class isn't attached to the root element that cypress uses, 
  // we have to attach it here, as all the css elements are scoped to that class.
  // const root = document.getElementById('__cy_root');
  // if(!root.classList.contains('cb-app')) 
  // {
  //   root.classList.add('cb-app');
  // }

  // //Finally, generate the styles and attach them to a "style" element in the header of the 
  // //cypress iframe
  // let styles = Theme.GenerateStyles();
  // let styleString = '';
  // for(var key in styles) 
  // {
  //   styleString = styleString.concat(`${key}: ${styles[key]};`);
  // }

  // root.setAttribute('style', styleString)

  // let styleElement = document.createElement('style');
  // styleElement.setAttribute('type', 'text/css');
  // styleElement.textContent = styleAsString;
  
  // document.head.appendChild(styleElement);

  return mount(MountedComponent, {
    global: {
        plugins: [library]
    },
    ...options, // To override values for specific tests
  });
});

// Example use:
// cy.mount(MyComponent)