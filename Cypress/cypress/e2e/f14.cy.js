const loginPage = require("../../page_objects/login-page");
const members = require("../../page_objects/members-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Feature 14', () => {
  beforeEach(() => {
    //cy.viewport(1366, 780);
  });
  it('Crear opción de navegación', () => {
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
    dashboardPage.clickBtnMenuMembers();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBtnNewMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.setMemberName("Test");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.setMemberEmail("test-miso-2022@test.com");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.clickBtnSaveMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickBtnMenuMembers();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickUserProfile();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    dashboardPage.clickSignOut();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
  });
})