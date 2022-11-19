const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 06', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear opción de navegación', () => {
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
    dashboardPage.clickMenuPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickOptionSort();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickSortPostByOldest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickLastPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.getPostTitleEditor();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickBackPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    //settingsPage.getNavigationName().should('have.value', "test1")
    //cy.wait(5000)
  });
})