const loginPage = require("../../page_objects/login-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const pagesPage = require("../../page_objects/pages-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 07', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Editar, publicar, consultar un page', () => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.setPassword("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    dashboardPages.goToPages();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goToNewPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.enterPageTitle("My awesome page title ");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.enterPageBody("My body page");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goToEditPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.enterPageBody("My body page update automatically");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.publishPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
  });
})