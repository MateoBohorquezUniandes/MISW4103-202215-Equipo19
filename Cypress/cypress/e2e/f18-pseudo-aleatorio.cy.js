const loginPage = require("../../page_objects/login-page");
const settingsPage = require("../../page_objects/settings-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");
const dataPseudoAleatorio = require('../support/data-pseudo-aleatorio');

describe('Feature 18', function () {
  before(async () => {
    this.data1 = await dataPseudoAleatorio.getNavigationRecord();
    this.data2 = await dataPseudoAleatorio.getNavigationRecord();
  })
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear 2 opción de nevagación, eliminar y consultar', () => {
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