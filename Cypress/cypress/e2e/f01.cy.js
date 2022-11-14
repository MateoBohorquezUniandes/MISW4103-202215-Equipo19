const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");

describe('Crear Post', () => {
  beforeEach(() => {
    //if(cy.get('input.password.ember-text-field.gh-input ember-view')){
    //  cy.get('input[name="password"]').type("Reyarruinado!1");
      //cy.get('//button/span[contains(.,"Log in")]').click();
    //}
  });
  it('I navigate to ghost sign in',() => {
    loginPage.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000)
  });
  it('I enter the username', () => {
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
  });
  it('I enter the password', () => {
    loginPage.setPassword("Reyarruinado!1");
  })
  it('I click on Sign in button',() =>{
    loginPage.clickSignInButton();
    cy.wait(5000);
  })
  it('I click on New post + button',() =>{
    postsPage.clickPlusNewPost();
    cy.wait(3000);
  })
  it('I write the title of the post "Mi Primer Post"',() =>{
    postsPage.writePostTitle("Mi Primer Post");
  })
})