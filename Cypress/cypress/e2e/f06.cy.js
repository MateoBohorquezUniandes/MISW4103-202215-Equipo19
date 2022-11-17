const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
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
    dashboardPage.clickMenuPost();
    cy.wait(1000)
    postsPage.clickOptionSort();
    cy.wait(1000)
    postsPage.clickSortPostByOldest();
    cy.wait(1000)
    postsPage.clickLastPost();
    cy.wait(1000)
    postsPage.getPostTitleEditor();
    cy.wait(1000)
    postsPage.clickBackPage();
    cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.wait(3000)
    //settingsPage.getNavigationName().should('have.value', "test1")
    //cy.wait(5000)
    
  });
})