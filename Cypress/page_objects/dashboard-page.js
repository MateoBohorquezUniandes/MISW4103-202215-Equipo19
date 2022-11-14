const Page = require("./page");

class DashboardPage extends Page {

    constructor() {
        super();
    }

    get btnMenuPost() { return 'ul.gh-nav-list.gh-nav-manage > li:nth-child(1) > a:nth-child(1)' }
    get btnMenuMembers() { return 'ul.gh-nav-list.gh-nav-manage > li:nth-child(4) > a:nth-child(1)' }
    get userProfile() { return 'div.ember-view.ember-basic-dropdown-trigger.outline-0.pointer' }
    get linkSignout() { return 'a.ember-view.dropdown-item.user-menu-signout' }
    get btnTag() { return 'a[href="#/tags/"]' }


    goToPages() {
        cy.get('a[href="#/pages/"]').click();
    }

    async goToTags() {
        const element = await this.driver.$(this.btnTag)
    }

    async clickTags() {
        let element = await this.driver.$(this.btnTag);
        return await element.click();
    }  

    async clickMenuPost() {
        let element = await this.driver.$(this.btnMenuPost);
        return await element.click();
    }

    async clickBtnMenuMembers() {
        let element = await this.driver.$(this.btnMenuMembers);
        return await element.click();
    }
    clickUserProfile() {
        cy.get(this.userProfile).click();
    }
    clickSignOut() {
        cy.get(this.linkSignout).click();
    }
}

module.exports = new DashboardPage();
