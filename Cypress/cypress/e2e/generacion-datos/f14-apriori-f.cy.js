const loginPage = require("../../page_objects/login-page");
const members = require("../../page_objects/members-page");
const dashboardPage = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Prueba de frontera. Campo Note = 500 caracteres. Se ingresa texto con longitud de 500 caracteres
describe('Feature 14', () => {
  before(() => {
    cy.fixture('members-data-pool.json').then(function (records) {
      records = records.filter(x => x.note.length >= 500).map((record) => { return { name: record.name, email: record.email, note: record.note.slice(0, 500) } });
      this.data = records[getRandom(0, Object.keys(records).length - 1)];
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