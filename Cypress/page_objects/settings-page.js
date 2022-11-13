const Page = require("./page");

class SettingsPage extends Page {
    constructor() {
        super();
    }

    get btnSetting() { return 'a.ember-view.gh-nav-bottom-tabicon' }
    get btnNavigation() { return 'a[href="#/settings/navigation/"]' }
    get btnSaveNavigation() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get btnSiteMenu() { return 'a[href="#/site/"]' }
    get inputNavigationName() { return 'form#settings-navigation > div.gh-blognav-item.ember-view > div.gh-blognav-line > span:nth-child(1) > input' }
    get lastNavigationOption() { return 'form#settings-navigation > div.sortable-objects.ember-view > div.js-draggableObject.draggable-object.ember-view:last-child > div > button' }
    get lastNavigationName() { return 'form#settings-navigation > div.sortable-objects.ember-view > div.js-draggableObject.draggable-object.ember-view:last-child > div > div > span:first-child > input' }

    async clickSettingsButton() {
        let element = await this.driver.$(this.btnSetting);
        return await element.click();
    }

    async clickNavigationOption() {
        let element = await this.driver.$(this.btnNavigation);
        return await element.click();
    }

    async clickSaveNavigationButton() {
        let element = await this.driver.$(this.btnSaveNavigation);
        return await element.click();
    }

    async clickSiteMenu() {
        let element = await this.driver.$(this.btnSiteMenu);
        return await element.click();
    }

    async getNavigationName(name) {
        let element = await this.driver.$(this.lastNavigationName);
        return await element.getValue();
    }

    async setNavigationName(name) {
        let element = await this.driver.$(this.inputNavigationName);
        return await element.setValue(name);
    }

    async clickDeleteLastNavigationOption() {
        let element = await this.driver.$(this.lastNavigationOption);
        return await element.click();
    }
}

module.exports = new SettingsPage();