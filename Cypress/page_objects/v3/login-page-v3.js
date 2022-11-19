const Page = require("./page-v3");

class LoginPage extends Page {

    constructor() {
        super();
    }

    get username() { return 'input[name="identification"]' };
    get password() { return 'input[name="password"]' }
    get signInButton() { return 'button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view' }

    setUserName(username) {
        cy.get(this.username).type(username)
    }

    setPassword(password) {
        cy.get(this.password).type(password)
    }

    clickSignInButton() {
        cy.get(this.signInButton).click()
    }
    seeLoginScreen() {
        expect(cy.get(this.signInButton));
    }
}

module.exports = new LoginPage();