const loginPage = require("../../page_objects/login-page");
const settingsPage = require("../../page_objects/settings-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");
const profilePage = require("../../page_objects/profile-page");

describe('Feature 17', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Execute scenery feature 1',() => { 
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
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPage.clickViewYourProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    profilePage.scrollToFinal();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    profilePage.typeOldPass("Reyarruinado!1");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    profilePage.typeNewPass("Reyarruinado!2");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    profilePage.typeVerifyPass("Reyarruinado!2");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    profilePage.clickChangePass();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    profilePage.seeNotification();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(4000);
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.seeLoginScreen();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.setPassword("Reyarruinado!2");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    loginPage.clickSignInButton();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(5000);
    dashboardPage.seeDashboard();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
  });
})