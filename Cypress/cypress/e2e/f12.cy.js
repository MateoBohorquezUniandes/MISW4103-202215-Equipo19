const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");
const tagsPage = require("../../page_objects/tags-page");

describe('Feature 12', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Execute scenery feature 12',() => { 
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
    dashboardPages.goToTags();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    tagsPage.clickTagsNew();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    tagsPage.setTagName("F12");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    tagsPage.clickBtnSaveTag();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000);
    dashboardPages.clickMenuPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPages.goToTags();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    tagsPage.getTagNameFromList("F12");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.clickPlusNewPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    postsPage.writePostTitle("Feature 12");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.openSettingsMenu();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    postsPage.asingTag("F12");
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
  })
})