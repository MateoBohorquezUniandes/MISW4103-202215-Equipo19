const Page = require("./page");

class LoginPage extends Page {

    constructor() {
        super();
    }

    get username() { return '#identification' };
    get password() { return '#password' }
    get signInButton() { return 'button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view' }

    setUserName(username) {
        cy.get(this.username).type(username)
    }

    setPassword(password) {
        cy.get(this.password).type(password)
    }

    clickSignInButton() {
        cy.get(this.signInButton).click()
    }
}

module.exports = new LoginPage();