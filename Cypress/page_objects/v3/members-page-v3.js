const Page = require("./page-v3");

class MembersPage extends Page {
    constructor() {
        super();
    }

    get btnNewMember() { return 'a.ember-view.gh-btn.gh-btn-primary' }
    get btnSaveMember() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get inputMemberName() { return '#member-name' }
    get inputMemberEmail() { return '#member-email' }
    get inputMemberNote() { return '#member-note' }
    get btnFilterMember() { return 'div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-icon.gh-btn-action-icon' }
    get inputBuscarMember() { return 'input.gh-input.gh-members-list-searchfield' }
    get btnSettingMember() { return 'button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view' }
    get btnDeleteMember() { return 'ul.dropdown.gh-member-actions-menu.dropdown-menu.dropdown-triangle-top-right.open.fade-in-scale.open.ember-view > li:last-child' }
    get btnConfirmDeleteMember() { return '.gh-btn.gh-btn-red.gh-btn-icon.ember-view' }
    get btnBackMember() { return 'div.gh-canvas-breadcrumb > a.ember-view' }
    get btnConfirmLeavePage() { return 'div.epm-modal-container button.gh-btn.gh-btn-red' }
    get btnSelectFirstMember() { return 'div.gh-list-scrolling.gh-list-with-helpsection a:nth-child(1)' }
    get inputFilterMember() { return 'div.gh-filter-inputgroup input.gh-input' }
    get btnApplyFilterMember() { return 'div.gh-filter-builder-footer button.gh-btn.gh-btn-primary' }

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

    setMemberNote(text) {
        cy.get(this.inputMemberNote).type(text);
    }

    clickBuscarMember(text) {
        cy.get(this.inputBuscarMember).type(text);
    }

    clickBtnSettingMember() {
        cy.get(this.btnSettingMember).click();
    }

    clickBtnDeleteMember() {
        cy.get(this.btnDeleteMember).click();
    }

    clickDeleteConfirmationMember() {
        cy.get(this.btnConfirmDeleteMember).click();
    }

    clickConfirmLeavePage() {
        cy.get(this.btnConfirmLeavePage).click();
    }

    clickBtnBackMember() {
        cy.get(this.btnBackMember).click();
    }

    clickSelectFirstMember() {
        cy.get(this.btnSelectFirstMember).click();
    }

    clickBuscarMember(text) {
        cy.get(this.inputBuscarMember).type(text);
    }

    clickBtnFilterMember() {
        cy.get(this.btnFilterMember).click();
    }

    setInputFilterMember(text) {
        cy.get(this.inputFilterMember).type(text);
    }

    clickApplyFilterMember() {
        cy.get(this.btnApplyFilterMember).click();
    }
}

module.exports = new MembersPage();