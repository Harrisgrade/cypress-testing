/// <reference types="cypress" />

declare module "cypress-xpath";
declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): Chainable<any>;
    verifyScroll(): Chainable<any>;
    isScrolledTo(selector: string): Chainable<any>;
    validateText(selector: string, result: string[]): Chainable<any>;
    /**
     * Custom command to select DOM elements using XPath.
     * @example cy.xpath('//ul[@id="menu-main-menu"]/li')
     */
    xpath<E extends Node = HTMLElement>(
      selector: string,
      options?: Partial<Loggable & Timeoutable & Withinable>
    ): Chainable<JQuery<E>>;
  }
}
