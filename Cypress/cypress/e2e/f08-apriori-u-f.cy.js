const loginPage = require("../../page_objects/login-page");
const pagesPage = require("../../page_objects/pages-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

//Apriori
//Actualizar Page Titulo 255 (Frontera)

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Feature 08', () => {
  before(() => {
    cy.fixture('page-data-pool.json').then(function (records) {
      this.records = records;
      this.dataLimitArray = this.records.filter(x => x.page_title.length > 255);
      this.dataLimit = this.dataLimitArray[getRandom(0, Object.keys(this.dataLimitArray).length)]
      this.dataLimit.page_title = this.dataLimit.page_title.slice(0, 245);
      this.data = this.records[getRandom(0, Object.keys(this.records).length)];
      this.data.page_title = this.data.page_title.slice(0, 10);
    });

  });

  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Crear,Editar, publicar, consultar un page', function () {
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
    dashboardPage.goToPages();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.goToNewPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    pagesPage.enterPageTitle(this.data.page_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    pagesPage.enterPageBody(this.data.page_body);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    pagesPage.goBackToPagesList();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    pagesPage.clickSortPagesByNewest();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.clickTheFirstPage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.enterPageTitle(this.dataLimit.page_title);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    pagesPage.publishPage()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.goToEditor()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    pagesPage.goBackToPagesList()
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    //pagesPages.findPageTitle("My awesome page title")
    //cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000)
  });
})