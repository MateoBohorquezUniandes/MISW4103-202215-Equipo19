const loginPage = require("../../page_objects/login-page");
const members = require("../../page_objects/members-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Feature 14', () => {
  before(() => {
    cy.fixture('members-data-pool.json').then(function (records) {
      const params = ['id', 'name', 'email', 'note', 'naughty', 'first_name_european', 'given_name_chinese'];
      const lengthParams = params.length - 1;
      records = records[getRandom(0, Object.keys(records).length - 1)];
      this.data = { name: records[params[getRandom(0, lengthParams)]], email: records[params[getRandom(0, lengthParams)]], note: records[params[getRandom(0, lengthParams)]] };
      this.isValid = this.data.name.length <= 191 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.data.email) && this.data.note.length <= 500;
    });
  })
  beforeEach(() => {
  });
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
    dashboardPage.clickBtnMenuMembers();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    members.clickBtnNewMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.setMemberName(this.data.name);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.setMemberEmail(this.data.email);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.setMemberNote(this.data.note);
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(2000);
    members.clickBtnSaveMember();
    cy.screenshot(screenshotFunction.getStep(Cypress.spec));
    cy.wait(1000);
    cy.get('body').then(($body) => {
      if (!($body.find('.response:visible').length == 0 && this.isValid))
        expect(false).to.to.true
      else {
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
    })
  });
})