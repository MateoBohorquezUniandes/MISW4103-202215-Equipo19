const loginPage = require("../../page_objects/v3/login-page-v3");
const pagesPage = require("../../page_objects/v3/pages-page-v3");
const dashboardPages = require("../../page_objects/v3/dashboard-page-v3");
const screenshotFunction = require("../../page_objects/v3/screenshot-function-v3");

describe('Feature 11', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear 2 paginas, Filtrar por antiguos, consultar un page ',() => { 
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
    pagesPage.enterPageTitle("Feature 11A");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.enterPageBody("Feature 11A");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000);
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goToNewPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.enterPageTitle("Feature 11B");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.enterPageBody("Feature 11B");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000);
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.clickSortPagesByOldest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.clickTheFirstPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.getBodyTextEditor("Feature 11A");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    pagesPage.goBackToPagesListFilter();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPages.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPages.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.seeLoginScreen();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
  });
})