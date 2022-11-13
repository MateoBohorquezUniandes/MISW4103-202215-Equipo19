module.exports = class LoginPage {

    constructor(driver) {
        this.driver = driver;
    }

    get username() { return '#identification' };
    get password() { return '#password' }
    get signInButton() { return '#ember7' }

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

