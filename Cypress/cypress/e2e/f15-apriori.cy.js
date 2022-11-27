const loginPage = require("../../page_objects/login-page");
const members = require("../../page_objects/members-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Feature 15', () => {
  before(() => {
    cy.fixture('members-data-pool.json').then(function (records) {
      this.data = records[getRandom(0, Object.keys(records).length - 1)];
      this.isValid = this.data.name.length <= 191 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.data.email) && this.data.note.length <= 500;
    });
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Crear, consultar, filtrar miembro por nombre y email', function () {
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
    cy.get('body').then(($body) => {
      if (!($body.find('.response:visible').length == 0 && this.isValid))
        expect(false).to.to.true
      else {
        members.clickBtnBackMember();
        cy.screenshot(screenshotFunction.getStep(Cypress.spec));
        cy.wait(1000);
        members.clickBtnFilterMember();
        cy.screenshot(screenshotFunction.getStep(Cypress.spec));
        cy.wait(1000);
        members.setInputFilterMember(this.data.name);
        cy.screenshot(screenshotFunction.getStep(Cypress.spec));
        cy.wait(1000);
        members.clickApplyFilterMember();
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
      }
    });
  });
})