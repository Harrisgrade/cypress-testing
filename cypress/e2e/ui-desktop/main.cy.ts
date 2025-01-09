import { selectors } from "../../selectors/mainSelectors";
import * as pageData from "../../fixtures/pageData";

describe("Main Page", () => {
  beforeEach(() => {
    cy.login()
      .scrollTo("top")
      .window()
      .its("scrollY")
      .should("equal", 0)
      .then(($scrollY) => {
        cy.wrap($scrollY).as("initialScrollY");
      });
    cy.viewport(1920, 1080);
  });

  it("nav bar should display correct text", () => {
    cy.validateText(selectors.navBar, pageData.navTexts);
    cy.validateText(selectors.solutionsList, pageData.solutionsText);
    cy.validateText(selectors.industriesList, pageData.industriesText);
    cy.validateText(selectors.aboutUsList, pageData.aboutText);
  });
  it("validate page scrolling", () => {
    cy.get("@initialScrollY").then((initialScrollY) => {
      cy.window()
        .its("scrollY")
        .then((newScrollY) => {
          cy.wrap(newScrollY).should("eq", initialScrollY);
        });
    });
    // what cus is saying selector
    cy.get(selectors.aFewOfOurClients).scrollIntoView();
    cy.isScrolledTo(selectors.aFewOfOurClients);
    cy.verifyScroll();
    cy.get(selectors.whatCustomersSay).scrollIntoView();
    cy.isScrolledTo(selectors.whatCustomersSay);
    cy.verifyScroll();
    cy.get(selectors.runningNumbers).scrollIntoView();
    cy.isScrolledTo(selectors.runningNumbers);
    cy.verifyScroll();
    cy.get(selectors.insightTrends).scrollIntoView();
    cy.isScrolledTo(selectors.insightTrends);
    cy.verifyScroll();
  });
  xit("3", () => {
    cy.get(".elementor-element-341d4e43 > .elementor-container").should(
      "be.visible"
    );
  });
});
