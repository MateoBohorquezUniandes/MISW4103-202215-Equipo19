const Page = require("./page");

class MembersPage extends Page {
    constructor() {
        super();
    }

    get btnNewMember() { return 'a.ember-view.gh-btn.gh-btn-primary' }
    get btnSaveMember() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get inputMemberName() { return '#member-name' }
    get inputMemberEmail() { return '#member-email' }
    get btnFilterMember() { return 'div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-icon.gh-btn-action-icon' }
    get inputBuscarMember() { return 'input.gh-inputgh-members-list-searchfield' }
    get btnSettingMember() { return 'button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view' }

    clickBtnNewMember() {
        cy.get(this.btnNewMember).click();
    }

    clickBtnSaveMember() {
        cy.get(this.btnSaveMember).click();
    }

    setMemberName(text) {
        cy.get(this.inputMemberName).type(text);
    }

    setMemberEmail(text) {
        cy.get(this.inputMemberEmail).type(text);
    }

    clickBuscarMember(text) {
        cy.get(this.inputBuscarMember).type(text);
    }

    clickBtnSettingMember() {
        cy.get(this.btnSettingMember).click();
    }

}

module.exports = new MembersPage();