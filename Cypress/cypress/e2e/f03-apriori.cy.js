const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Feature 3', () => {
  before(() => {
    cy.fixture('post-data-pool.json').then(function (records) {
      this.records = records;
      this.data = this.records[getRandom(0, Object.keys(this.records).length)];
    });
  });
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Eliminar y Consultar post', function() {
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
    cy.wait(3000);
    postsPage.writePostTitle(this.data.post_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.publishPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.getConfirmationPublish();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.goBackEditor();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.goBackToPostSection();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.clickPostSelected(this.data.post_title);
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
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    loginPage.seeLoginScreen();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
  });
})