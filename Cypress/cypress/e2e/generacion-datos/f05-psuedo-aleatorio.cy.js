const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");
const dataPseudoAleatorio = require('../support/data-pseudo-aleatorio');

describe('Feature 5', function(){
    before(async () => {
      this.data = await dataPseudoAleatorio.getPostRecord();
    })
    beforeEach(() => {
      cy.viewport(1366, 768);
    });
    it('Execute scenery feature 5',() => { 
      loginPage.visit('http://localhost:2368/ghost/#/signin');
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(1000)
      loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      loginPage.setPassword("Reyarruinado!1");
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      loginPage.clickSignInButton();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      postsPage.clickPlusNewPost();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(2000);
      postsPage.writePostTitle(this.data.post_title);
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(2000);
      postsPage.publishPost();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(1000);
      postsPage.getConfirmationPublish();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      postsPage.goBackEditor();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(1000);
      postsPage.goBackToPostSection();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(2000);
      // postsPage.clickPostPublished();
      // cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      // cy.wait(2000);
      postsPage.clickPostSelected(this.data.post_title);
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(2000);
      postsPage.getConfirmationUpdate();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      postsPage.goBackToPostSection();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      cy.wait(2000);
      dashboardPages.clickUserProfile();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      dashboardPages.clickSignOut();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
      loginPage.seeLoginScreen();
      cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    });
})