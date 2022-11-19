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

    goToTags() {
        cy.get(this.btnTag).click();
    }

    clickTags() {
        cy.get(this.btnTag).click();
    }

    clickMenuPost() {
        cy.get(this.btnMenuPost).click();
    }

    clickBtnMenuMembers() {
        cy.get(this.btnMenuMembers).click();
    }

    clickUserProfile() {
        cy.get(this.userProfile).click();
    }

    clickSignOut() {
        cy.get(this.linkSignout).click();
    }
}

module.exports = new DashboardPage();
