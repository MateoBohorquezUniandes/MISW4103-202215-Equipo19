const loginPage = require("../../page_objects/login-page");
const pagesPages = require("../../page_objects/pages-page");
const dashboardPage = require("../../page_objects/dashboard-page");


describe('Crear, eliminar y consultar page', () => {
  beforeEach(() => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(2000)
  });
  it('Crear, eliminar y consultar page', () => {
    // Login
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.wait(3000)
    dashboardPage.goToPages();
    cy.wait(1000)
    pagesPages.goToNewPage();
    cy.wait(1000)
    pagesPages.enterPageTitle("page test for delete 1");
    cy.wait(2000)
    pagesPages.enterPageBody("new page body for delete 1");
    cy.wait(2000)
    pagesPages.goBackToPagesList();
    cy.wait(1000)
    pagesPages.clickSortPagesByNewest();
    cy.wait(1000)
    //pagesPages.findPageTitle("page test for delete 1")
    //cy.wait(1000)
    pagesPages.clickTheFirstPage();
    cy.wait(1000)
    pagesPages.clickPageSettings()
    cy.wait(2000)
    pagesPages.clickDelete()
    cy.wait(1000)
    pagesPages.clickDeleteConfirmation()
    cy.wait(1000)
    pagesPages.goBackToPagesList()
    cy.wait(1000)
    //pagesPages.findPageTitle("page test for delete 1")
    //cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.wait(3000)
  });
})