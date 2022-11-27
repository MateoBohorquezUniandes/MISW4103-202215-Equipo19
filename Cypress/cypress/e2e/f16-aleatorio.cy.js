const loginPage = require("../../page_objects/login-page");
const members = require("../../page_objects/members-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");
const dataAleatorio = require('../support/data-aleatorio');

describe('Feature 16', function () {
  before(() => {
    this.data = {
      name: dataAleatorio.getMemberName(),
      email: dataAleatorio.getMemberEmail(),
      note: dataAleatorio.getMemberNote()
    }
    this.isValid = this.data.name.length <= 191 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.data.email) && this.data.note.length <= 500;
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Crear, consultar, editar y eliminar miembro', () => {
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
    members.setMemberName(this.data.name);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.setMemberEmail(this.data.email);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.clickBtnSaveMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBtnBackMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBuscarMember(this.data.email);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickSelectFirstMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.setMemberNote(this.data.note);
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