const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");
const dataAleatorio = require('../support/data-aleatorio');

describe('Editar post', function() {
  before(() => {
    this.data = {
      post_title: dataAleatorio.getPostTitle(),
      post_body: dataAleatorio.getPostBody()
    },
    this.data2 = {
      post_title: dataAleatorio.getPostTitle(),
      post_body: dataAleatorio.getPostBody()
    }
  })
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Execute scenery feature 2',() => { 
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
    postsPage.goPostSection();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.openEditorPost(this.data.post_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.cleanPostTitle();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.writePostTitle(this.data2.post_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.updatePost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.getConfirmationUpdate()
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
  })
  it('Ver post editado',()=> {
    cy.visit('http://localhost:2368/');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.searchPost(this.data2.post_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.getPostTitle(this.data2.post_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
  })
})