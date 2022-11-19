const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 3', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Eliminar y Consultar post', () => {
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
    postsPage.goToPagePost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickPostSelected('Mi Primer Post');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickSettingsButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickBtnDeletePost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickDeleteConfirmationPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    loginPage.seeLoginScreen();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
  });
})