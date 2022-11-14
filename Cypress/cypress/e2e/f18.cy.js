const loginPage = require("../../page_objects/login-page");
const settingsPage = require("../../page_objects/settings-page");
const dashboardPage = require("../../page_objects/dashboard-page");


describe('rear 2 opción de nevagación, eliminar y consultar', () => {
  beforeEach(() => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(2000)
  });
  it('Crear opción de navegación', () => {
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.wait(3000)
    settingsPage.clickSettingsButton();
    cy.wait(1000)
    settingsPage.clickNavigationOption();
    cy.wait(1000)
    settingsPage.setNavigationName("test1");
    cy.wait(1000)
    settingsPage.clickSaveNavigationButton();
    cy.wait(1000)
    settingsPage.setNavigationName("test2");
    cy.wait(1000)
    settingsPage.clickSaveNavigationButton();
    cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.wait(3000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.wait(2000)
    settingsPage.clickSiteMenu();
    cy.wait(3000)
    settingsPage.clickSettingsButton();
    cy.wait(1000)
    settingsPage.clickNavigationOption();
    cy.wait(1000)
    settingsPage.clickDeleteLastNavigationOption();
    cy.wait(1000)
    settingsPage.clickSaveNavigationButton();
    cy.wait(1000)
    settingsPage.getNavigationName().should('have.value', "test1")
    cy.wait(5000)
  });
})