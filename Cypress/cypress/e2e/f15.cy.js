const loginPage = require("../../page_objects/login-page");
const members = require("../../page_objects/members-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");


describe('Feature 5', () => {
  beforeEach(() => {
    //cy.viewport(1366, 768);
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
  it('Crear, consultar, filtrar miembro por nombre y email', () => {
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
    cy.wait(1000);
    members.setMemberName("Test");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.setMemberEmail("test-miso-2022@test.com");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.clickBtnSaveMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBtnBackMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBtnFilterMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.setInputFilterMember("Test");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickApplyFilterMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickSelectFirstMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.setMemberNote("Notas test-miso-2022@test.com");
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.clickBtnSaveMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBtnBackMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickSelectFirstMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBtnSettingMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.clickBtnDeleteMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    members.clickDeleteConfirmationMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(3000);
    members.clickConfirmLeavePage();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(4000);
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