const dashboardPage = require("../../page_objects/dashboard-page");
const loginPage = require("../../page_objects/login-page");
const tagsPage = require("../../page_objects/tags-page");

describe('Test login', () => {
  beforeEach(() => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(2000)
  });
  it('Test login', () => {
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    cy.wait(1000)
    loginPage.setPassword("Reyarruinado!1");
    cy.wait(1000)
    loginPage.clickSignInButton();
    cy.wait(1000)
    dashboardPage.goToTags
    cy.wait(1000)
    dashboardPage.clickTags
    cy.wait(1000)
  });

  it('Create tag', () =>{
    dashboardPage.goToTags
    cy.wait(1000)
    dashboardPage.clickTags
    cy.wait(1000)
  });
  
})