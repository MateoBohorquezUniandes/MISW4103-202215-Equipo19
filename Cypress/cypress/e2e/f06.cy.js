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
    postsPage.clickPlusNewPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.writePostTitle("Feature 6 - Primer post");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.clickBackPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickPlusNewPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.writePostTitle("Feature 6 - Segundo Post");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.clickBackPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickOptionSort();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickSortPostByRecent();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickFirstPost();
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
  });
})