const loginPage = require("../../page_objects/login-page");
const pagesPages = require("../../page_objects/pages-page");
const dashboardPage = require("../../page_objects/dashboard-page");


describe('FEditar, publicar, consultar un page ', () => {
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
    dashboardPage.goToPages();
    cy.wait(1000)
    pagesPages.goToNewPage();
    cy.wait(1000)
    pagesPages.enterPageTitle("My awesome page title");
    cy.wait(2000)
    pagesPages.enterPageBody("My body page");
    cy.wait(2000)
    pagesPages.goBackToPagesList();
    cy.wait(1000)
    pagesPages.clickSortPagesByNewest();
    cy.wait(1000)
    pagesPages.clickTheFirstPage();
    cy.wait(1000)
    pagesPages.enterPageBody("My body page update automatically");
    cy.wait(2000)
    pagesPages.publishPage()
    cy.wait(1000)
    pagesPages.goToEditor()
    cy.wait(1000)
    pagesPages.goBackToPagesList()
    cy.wait(1000)
    //pagesPages.findPageTitle("My awesome page title")
    //cy.wait(1000)
    dashboardPage.clickUserProfile();
    cy.wait(1000)
    dashboardPage.clickSignOut();
    cy.wait(3000)
  });
})