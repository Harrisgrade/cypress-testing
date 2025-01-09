import { selectors } from "../../selectors/mainSelectors";
import * as pageData from "../../fixtures/pageData";
import "@percy/cypress";
import "cypress-xpath";

describe("main page text link visual validation", () => {
  beforeEach(() => {
    cy.login();
  });
  it("nav bar should display correct text", () => {
    cy.validateText(selectors.navBar, pageData.navTexts);
    cy.validateText(selectors.solutionsList, pageData.solutionsText);
    cy.validateText(selectors.industriesList, pageData.industriesText);
    cy.validateText(selectors.aboutUsList, pageData.aboutText);
  });
  it("link validation", () => {
    cy.xpath("//body[1]/header[2]/div[1]/nav[1]/ul[1]/li/a[1]").then(($el) => {
      cy.wrap($el).eq(2).should("have.attr", "href", pageData.navLinks[0]);
      cy.wrap($el).eq(3).should("have.attr", "href", pageData.navLinks[1]);
      cy.wrap($el).eq(4).should("have.attr", "href", pageData.navLinks[2]);
      cy.wrap($el).eq(6).should("have.attr", "href", pageData.navLinks[4]);
    });
    cy.validateLink(selectors.solutionsList, pageData.soultionsLinks);
    cy.validateLink(selectors.industriesList, pageData.industriesLinks);
    cy.validateLink(selectors.aboutUsList, pageData.aboutLinks);
  });
  it("visual validation", () => {
    cy.get("[data-id='d8a85d8']").should("be.visible");
    cy.percySnapshot("Carousel");
    cy.get("[data-id='c7b5f9b']").should("be.visible");
    cy.percySnapshot("Running Numbers");
  });
});
context("main page scroll validation", () => {
  beforeEach(() => {
    cy.login()
      .scrollTo("top")
      .window()
      .its("scrollY")
      .should("equal", 0)
      .then(($scrollY) => {
        cy.wrap($scrollY).as("initialScrollY");
      });
  });
  it("validate page scrolling", () => {
    cy.get("@initialScrollY").then((initialScrollY) => {
      cy.window()
        .its("scrollY")
        .then((newScrollY) => {
          cy.wrap(newScrollY).should("eq", initialScrollY);
        });
    });
    cy.get(selectors.aFewOfOurClients).scrollIntoView();
    cy.isScrolledTo(selectors.aFewOfOurClients);
    cy.verifyScroll().then(() => {
      cy.log("Scrolled to aFewOfOurClients");
    });
    cy.get(selectors.whatCustomersSay).scrollIntoView();
    cy.isScrolledTo(selectors.whatCustomersSay);
    cy.verifyScroll().then(() => {
      cy.log("Scrolled to whatCustomersSay");
    });
    cy.get(selectors.runningNumbers).scrollIntoView();
    cy.isScrolledTo(selectors.runningNumbers);
    cy.verifyScroll().then(() => {
      cy.log("Scrolled to runningNumbers");
    });
    cy.get(selectors.insightTrends).scrollIntoView();
    cy.isScrolledTo(selectors.insightTrends);
    cy.verifyScroll().then(() => {
      cy.log("Scrolled to insightTrends");
    });
  });
});
