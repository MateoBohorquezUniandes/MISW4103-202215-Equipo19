module.exports = class LoginPageV3 {

    constructor(driver) {
        this.driver = driver;
    }

    get username() { return 'input[name="identification"]' };
    get password() { return 'input[name="password"]' }
    get signInButton() { return 'button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view' }

    async setUserName(username) {
        let element = await this.driver.$(this.username);
        return await element.setValue(username);
    }

    async setPassword(password) {
        let element = await this.driver.$(this.password);
        return await element.setValue(password);
    }

    async clickSignInButton() {
        let element = await this.driver.$(this.signInButton);
        return await element.click();
    }
    async seeLoginScreen() {
        let element = await this.driver.$(this.signInButton);
        return element;
    }
}

