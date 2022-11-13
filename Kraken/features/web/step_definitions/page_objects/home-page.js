module.exports = class HomePage {

    constructor(driver) {
        this.driver = driver;
    }

    async goToPages() {
        const element = await this.driver.$('a[href="#/pages/"]');
        await element.click()
    }
}