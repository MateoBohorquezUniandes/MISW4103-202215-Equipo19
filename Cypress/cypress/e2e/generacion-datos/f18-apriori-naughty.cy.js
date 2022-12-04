const loginPage = require("../../page_objects/login-page");
const settingsPage = require("../../page_objects/settings-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Feature 18', () => {
  before(() => {
    cy.fixture('navigation-data-pool.json').then(function (records) {
      records = records.map((record) => { return { name: record.naughty, url: record.url } });
      this.data1 = records[getRandom(0, Object.keys(records).length - 1)];
      this.data2 = records[getRandom(0, Object.keys(records).length - 1)];
    });
  })
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear 2 opción de nevagación, eliminar y consultar', function () {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000)
    settingsPage.clickSettingsButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.clickNavigationOption();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.setNavigationName(this.data1.name);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.clickSaveNavigationButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.setNavigationName(this.data2.name);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.clickSaveNavigationButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000)
    settingsPage.clickSiteMenu();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000)
    settingsPage.clickSettingsButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.clickNavigationOption();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.clickDeleteLastNavigationOption();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.clickSaveNavigationButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000)
    settingsPage.getNavigationName().should('have.value', this.data1.name)
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000)
  });
})