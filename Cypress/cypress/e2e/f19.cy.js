const loginPage = require("../../page_objects/login-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const postsPage = require("../../page_objects/posts-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 19', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear post, publicar programado, filtrar por scheduled y editar contenido', () => {
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
    cy.wait(3000);
    postsPage.clickPlusNewPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.writePostTitle("My awesome post");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.publishSchedulePost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    postsPage.goBackEditor()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    postsPage.goBackToPostSection();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    postsPage.clickFilterPagesBySchedule();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    postsPage.clickOptionSort();
    postsPage.clickSortPostByOldest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickLastPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    postsPage.clickSettingsButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    postsPage.clickBtnDeletePost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    postsPage.clickDeleteConfirmationPost();
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