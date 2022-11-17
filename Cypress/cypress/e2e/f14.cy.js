const loginPage = require("../../page_objects/login-page");
const members = require("../../page_objects/members-page");
const dashboardPage = require("../../page_objects/dashboard-page");


describe('Filtrar posts creados', () => {
  beforeEach(() => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(2000)
  });
  it('Crear opción de navegación', () => {
    // Login
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.wait(3000)
    // Menu members
    dashboardPage.clickBtnMenuMembers();
    cy.wait(1000)
    members.clickBtnNewMember();
    cy.wait(1000)
    members.setMemberName("Test");
    cy.wait(2000)
    members.setMemberEmail("test@test.com");
    cy.wait(2000)
    members.clickBtnSaveMember();
    cy.wait(1000)
    dashboardPage.clickBtnMenuMembers();
    cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.wait(3000)
  });
})