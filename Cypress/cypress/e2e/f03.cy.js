const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPage = require("../../page_objects/dashboard-page");


describe('Eliminar y Consultar post', () => {
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
    // Page post
    dashboardPage.clickMenuPost();
    cy.wait(1000)
  });
})