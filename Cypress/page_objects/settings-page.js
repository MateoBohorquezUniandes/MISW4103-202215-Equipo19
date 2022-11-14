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

    clickSettingsButton() {
        cy.get(this.btnSetting).click();
    }

    clickNavigationOption() {
        cy.get(this.btnNavigation).click();
    }

    clickSaveNavigationButton() {
        cy.get(this.btnSaveNavigation).click();
    }

    clickSiteMenu() {
        cy.get(this.btnSiteMenu).click();
    }

    getNavigationName() {
        return cy.get(this.lastNavigationName);
    }

    setNavigationName(name) {
        cy.get(this.inputNavigationName).type(name);
    }

    clickDeleteLastNavigationOption() {
        cy.get(this.lastNavigationOption).click();
    }
}

module.exports = new SettingsPage();