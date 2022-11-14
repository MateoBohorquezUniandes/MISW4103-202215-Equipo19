const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPages = require("../../page_objects/dashboard-page");

describe('Crear Post', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Execute scenery feature 1',() => { 
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    loginPage.setPassword("Reyarruinado!1");
    loginPage.clickSignInButton();
    cy.wait(5000);
    postsPage.clickPlusNewPost();
    cy.wait(3000);
    postsPage.writePostTitle("Mi Primer Post");
    postsPage.publishPost();
    cy.wait(2000);
    postsPage.getConfirmationPublish();
    postsPage.goBackEditor();
    cy.wait(1000);
    postsPage.goBackToPostSection();
    dashboardPages.clickUserProfile();
    dashboardPages.clickSignOut();
    loginPage.seeLoginScreen();
  })
  it('Ver post creado',()=> {
    cy.visit('http://localhost:2368/');
    cy.wait(1000);
    postsPage.goToPostPage();
    cy.wait(1000);
    postsPage.getPostTitle("Mi Primer Post");
  })
})