module.exports = class MembersPage {
    constructor(driver) {
        this.driver = driver;
    }

    get btnNewMember() { return 'a.ember-view.gh-btn.gh-btn-primary' }
    get btnSaveMember() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get inputMemberName() { return '#member-name' }
    get inputMemberEmail() { return '#member-email' }
    get btnFilterMember() { return 'div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-icon.gh-btn-action-icon' }

    async clickBtnNewMember() {
        let element = await this.driver.$(this.btnNewMember);
        return await element.click();
    }

    async clickBtnSaveMember() {
        let element = await this.driver.$(this.btnSaveMember);
        return await element.click();
    }

    async setMemberName(text) {
        let element = await this.driver.$(this.inputMemberName);
        return await element.setValue(text);
    }

    async setMemberEmail(text) {
        let element = await this.driver.$(this.inputMemberEmail);
        return await element.setValue(text);
    }
}