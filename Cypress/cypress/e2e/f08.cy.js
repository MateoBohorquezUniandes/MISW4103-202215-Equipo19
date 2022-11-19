const loginPage = require("../../page_objects/login-page");
const pagesPages = require("../../page_objects/pages-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 08', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Editar, publicar, consultar un page ', () => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000)
    dashboardPage.goToPages();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPages.goToNewPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPages.enterPageTitle("My awesome page title");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    pagesPages.enterPageBody("My body page");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    pagesPages.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPages.clickSortPagesByNewest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPages.clickTheFirstPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPages.enterPageBody("My body page update automatically");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    pagesPages.publishPage()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPages.goToEditor()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPages.goBackToPagesList()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    //pagesPages.findPageTitle("My awesome page title")
    //cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000)
  });
})