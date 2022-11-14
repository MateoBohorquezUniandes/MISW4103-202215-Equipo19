const loginPage = require("../../page_objects/login-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const tagsPage = require("../../page_objects/tags-page");

describe('Crear Tag', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Execute scenery feature 13',() => { 
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    loginPage.setPassword("Reyarruinado!1");
    loginPage.clickSignInButton();
    cy.wait(3000);
    tagsPage.clickBtnTag();
    cy.wait(3000);
    tagsPage.clickTagsNew();
    cy.wait(3000);
    tagsPage.setTagName("Mi Primer Tag");
    tagsPage.clickBtnSaveTag();
    dashboardPages.clickUserProfile();
    dashboardPages.clickSignOut();
    loginPage.seeLoginScreen();
  });
});


