const loginPage = require("../../page_objects/login-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const pagesPage = require("../../page_objects/pages-page");

describe('Feature 10', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Crear, guardar y consultar un page en draft',() => { 
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    loginPage.setPassword("Reyarruinado!1");
    loginPage.clickSignInButton();
    cy.wait(1000);
    dashboardPages.goToPages();
    pagesPage.goToNewPage();
    pagesPage.enterPageTitle("Feature 10");
    pagesPage.enterPageBody("Feature 10");
    cy.wait(5000);
    pagesPage.goBackToPagesList();
    //pagesPage.clickSortPagesByNewest();
    cy.wait(2000);
    pagesPage.getDraftOnList("Feature 10");
    pagesPage.goBackToPagesList();
    dashboardPages.clickUserProfile();
    dashboardPages.clickSignOut();
    loginPage.seeLoginScreen();
  })
})