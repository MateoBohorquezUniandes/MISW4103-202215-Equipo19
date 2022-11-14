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
    loginPage.visit('http://localhost:2368/ghost');
    cy.wait(1000)
    loginPage.setUserName("i.bohorquezp@uniandes.edu.co");
    loginPage.setPassword("Reyarruinado!1");
    loginPage.clickSignInButton();
    cy.wait(5000);
    postsPage.goPostSection();
    cy.wait(5000);
  })
})