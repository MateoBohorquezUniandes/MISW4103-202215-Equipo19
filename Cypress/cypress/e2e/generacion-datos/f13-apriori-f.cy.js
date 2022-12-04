const loginPage = require("../../page_objects/login-page");
const screenshotFunction = require("../../page_objects/screenshot-function");
const tagsPage = require("../../page_objects/tags-page");
const dashboardPage = require("../../page_objects/dashboard-page");

//Apriori
//Tag Titulo 255 (Frontera)

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Feature 13', () => {
  before(() => {
    cy.fixture('tags-data-pool.json').then(function (records) {
      this.records = records;
      this.dataLimitArray = this.records.filter(x => x.tag_title.length <= 191);
      this.data = this.dataLimitArray[getRandom(0, Object.keys(this.dataLimitArray).length)]
    });
  });

  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Crear opción de navegación', function () {
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
    tagsPage.clickBtnTag();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    tagsPage.clickTagsNew()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    tagsPage.setTagName(this.data.tag_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    tagsPage.clickBtnSaveTag();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);

    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    
  });
})
