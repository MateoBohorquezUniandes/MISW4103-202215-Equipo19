module.exports = class TagsPage {
    constructor(driver) {
        this.driver = driver;
    }

    get btnTagNew() { return 'a[href="#/tags/new/"]' }
    get inputTagName() { return '#tag-name' }
    get btnSaveTag() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get btnDeleteTag() { return 'button.gh-btn.gh-btn-red.gh-btn-icon' }
    get tagName() { return 'h3.gh-tag-list-name' }
    get tagsLink() { return 'div.gh-canvas-breadcrumb > a[href="#/tags/"]' }


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

    async clickBtnDeleteTag() {
        let element = await this.driver.$(this.btnDeleteTag);
        await element.click();
    }

    async clickGoBackTags() {
        let element = await this.driver.$(this.tagsLink);
        await element.click();
    }

    async getTagName(title){
        var selector = '//a/h3[contains(.,"' + title + '")]';
        let element = await this.driver.$(selector);
        await element.click();
    }

    

    // async getTagName() {
    //     let element = await this.driver.$$(this.tagName);
    //     return await element.setTagName();

    // }



}