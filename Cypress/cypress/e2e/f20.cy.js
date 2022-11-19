const loginPage = require("../../page_objects/login-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const pagesPage = require("../../page_objects/pages-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 20', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear page, publicar programado, filtrar por scheduled y editar contenido', () => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
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
    cy.wait(3000);
    pagesPage.goToNewPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.enterPageTitle("My awesome page title");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    pagesPage.enterPageBody("My body page");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    pagesPage.publishScheduledPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.btnBackEditor()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.clickFilterPagesBySchedule();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.clickSortPagesByNewest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.clickTheFirstPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.clickPageSettings();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    pagesPage.clickDelete();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    pagesPage.clickDeleteConfirmation();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000)
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
  });
})