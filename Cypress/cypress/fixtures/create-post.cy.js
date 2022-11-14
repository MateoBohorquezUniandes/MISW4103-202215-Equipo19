const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPages = require("../../page_objects/dashboard-page");

describe('Editar post', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });
  it('Execute scenery feature 2',() => { 
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    loginPage.setPassword("Reyarruinado!1");
    loginPage.clickSignInButton();
    postsPage.clickPlusNewPost();
    cy.wait(2000);
    postsPage.writePostTitle("Feature 2");
    cy.wait(2000);
    postsPage.publishPost();
    cy.wait(1000);
    postsPage.getConfirmationPublish();
    postsPage.goBackEditor();
    cy.wait(1000);
    postsPage.goBackToPostSection();
    cy.wait(2000);
    postsPage.goPostSection();
    postsPage.openEditorPost("Feature 2");
    cy.wait(1000);
    postsPage.cleanPostTitle();
    postsPage.writePostTitle("Post Editado");
    postsPage.updatePost();
    cy.wait(2000);
    postsPage.getConfirmationUpdate()
    postsPage.goBackToPostSection();
    cy.wait(2000);
    dashboardPages.clickUserProfile();
    dashboardPages.clickSignOut();
    loginPage.seeLoginScreen();
  })
  it('Ver post editado',()=> {
    cy.visit('http://localhost:2368/');
    postsPage.searchPost("Post Editado");
    cy.wait(1000);
    postsPage.getPostTitle("Post Editado");
  })
})