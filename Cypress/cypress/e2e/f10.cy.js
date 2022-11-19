const loginPage = require("../../page_objects/login-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const pagesPage = require("../../page_objects/pages-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 10', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear, guardar y consultar un page en draft',() => { 
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.setPassword("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPages.goToPages();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goToNewPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.enterPageTitle("Feature 10");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.enterPageBody("Feature 10");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000);
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    //pagesPage.clickSortPagesByNewest();
    cy.wait(2000);
    pagesPage.getDraftOnList("Feature 10");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPages.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPages.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.seeLoginScreen();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
  })
})