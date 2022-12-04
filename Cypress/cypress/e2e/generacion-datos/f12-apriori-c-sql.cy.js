const loginPage = require("../../../page_objects/login-page");
const postsPage = require("../../../page_objects/posts-page");
const dashboardPages = require("../../../page_objects/dashboard-page");
const screenshotFunction = require("../../../page_objects/screenshot-function");
const tagsPage = require("../../../page_objects/tags-page");

//Apriori
//Tag Titulo sql

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Feature 13', () => {
  before(() => {
    cy.fixture('tags-data-pool.json').then(function (records) {
      this.records = records;
      this.dataScriptCharsArray = this.records.filter(x => x.page_naughty?.toLowerCase().includes('table'));
      this.dataScript = this.dataScriptCharsArray[getRandom(0, Object.keys(this.dataScriptCharsArray).length)]
      this.data = this.records[getRandom(0, Object.keys(this.records).length)];
    });
  });

  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Execute scenery feature 12', function () { 
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
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
    tagsPage.setTagName(this.data.tag_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    tagsPage.clickBtnSaveTag();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000);
    dashboardPages.clickMenuPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    dashboardPages.goToTags();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    tagsPage.getTagNameFromList(this.data.tag_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.clickPlusNewPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    postsPage.writePostTitle(this.data.tag_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.openSettingsMenu();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.asingTag(this.data.tag_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.publishPost();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.getConfirmationPublish();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    postsPage.goBackEditor();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    postsPage.goBackToPostSection();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    dashboardPages.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    dashboardPages.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    loginPage.seeLoginScreen();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
  })
})