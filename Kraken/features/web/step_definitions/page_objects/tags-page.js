module.exports = class TagsPage {
    constructor(driver) {
        this.driver = driver;
    }

    get btnTagNew() { return 'a[href="#/tags/new"]' }
    get inputTagName() { return 'input.gh-input' }
    get btnSaveTag() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get tagName() {return 'h3.gh-tag-list-name'} 


    async clickBtnNewTags() {
        let element = await this.driver.$(this.btnTagNew);
        await element.click();
    }

    async setTagName(text) {
        let element = await this.driver.$(this.inputTagName);
        return await element.setValue(text);
    }

    async clickBtnSaveTag() {
        let element = await this.driver.$(this.btnSaveTag);
        await element.click();
    }

    async getTagName() {
        let element = await this.driver.$$(this.tagName);
        return await element.setTagName();

    }



}