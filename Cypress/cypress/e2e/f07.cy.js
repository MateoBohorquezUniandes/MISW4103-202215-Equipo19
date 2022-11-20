const loginPage = require("../../page_objects/login-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const pagesPage = require("../../page_objects/pages-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 07', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Editar, publicar, consultar un page', () => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    loginPage.setPassword("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    dashboardPage.goToPages();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goToNewPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.enterPageTitle("My awesome page title");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    pagesPage.enterPageBody("My body page");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(4000);
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    pagesPage.clickOptionSort();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.clickSortPageByOldest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.clickOptionSort();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.clickSortPageByNewest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.clickFirstPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.enterPageBody("My body page update automatically");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.publishPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goBackToPagesListAfterPublish();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
  });
})