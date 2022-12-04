const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Crear Post', () => {
  before(() => {
    cy.fixture('post-data-pool.json').then(function (records) {
      this.records = records;
      this.data = this.records[getRandom(0, Object.keys(this.records).length)];
    });
  });
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Execute scenery feature 1', function () { 
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.setPassword("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000);
    postsPage.clickPlusNewPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    postsPage.writePostTitle(this.data.post_emoji);
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
    dashboardPages.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPages.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.seeLoginScreen();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.visit('http://localhost:2368/');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.goPostFirst();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.getPostTitle(this.data.post_emoji);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
  })
})