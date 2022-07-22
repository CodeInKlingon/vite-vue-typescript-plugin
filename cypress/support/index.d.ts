/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        mount(MountedComponent: any, options: any): Chainable<Element>;
        vue(): Chainable<VueWrapper<ComponentPublicInstance>>;
        attachFile;
    }
}
