module.exports = class PagesPage {

    constructor(driver) {
        this.driver = driver;
    }

    async goToNewPage() {
        const element = await this.driver.$('a[href="#/editor/page/"]');
        await element.click()
    }

    async enterPageTitle(pageTitle) {
        const element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
        return element.setValue(pageTitle);
    }

    async enterPageBody(pageBody) {
        let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
        await element.click();
        element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
        return element.setValue(pageBody);
    }

    async goBackToPagesList() {
        const element = await this.driver.$('a[href="#/pages/"]');
        return element.click()
    }

    async clickTheFirstPage() {
        let element = await this.driver.$('section.view-container.content-list > div.gh-list-sticky > ol.pages-list.gh-list.feature-memberAttribution >li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:nth-child(1) > a:nth-child(1) > h3.gh-content-entry-title:nth-child(1)');
        return element.click();
    }

    async goToEditPage() {
        const element = await this.driver.$('.ember-view permalink.gh-list-data.gh-post-list-button');
        return element.click()
    }

    async clickSortPagesByNewest() {
        let element = await this.driver.$('div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-sort > div.ember-view.ember-basic-dropdown-trigger');
        await element.click();
        element = await this.driver.$('li.ember-power-select-option:nth-child(1)');
        return element.click();
    }

    async publishPage() {
        let element = await this.driver.$('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
        await element.click();
        element = await this.driver.$('.gh-btn.gh-btn-black.gh-btn-large');
        element.click();
        element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
        return element.click();
    }

    async clickOptionTypePage() {
        let element = await this.driver.$('div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-type > div.ember-view.ember-basic-dropdown-trigger');
        return element.click();
    }

    async clickSortPagesByPublished() {
        let element = await this.driver.$('li.ember-power-select-option:nth-child(3)');
        return element.click();
    }

    async findPageTitle(title) {
        let element = await this.driver.$('//a/h3[contains(.,"' + title + '")]');
        let value = await element.getText();
        return value;
    }

    async goToEditor() {
        const element = await this.driver.$('button.gh-back-to-editor');
        return element.click();
    }
    async getDraftOnList(title) {
        let element = await this.driver.$('//a/h3[contains(.,"' + title + '")]');
        await element.click();
        return element = await this.driver.$('//span/div[contains(.,"Draft - Saved")]')
    }

    async clickSortPagesByOldest() {
        let element = await this.driver.$('div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-sort > div.ember-view.ember-basic-dropdown-trigger');
        await element.click();
        element = await this.driver.$('li.ember-power-select-option:nth-child(2)');
        return element.click();
    }

    async clickPageSettings() {
        let element = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
        await element.click();
    }

    async clickDelete() {
        let element = await this.driver.$('#entry-controls > div.settings-menu.settings-menu-pane.settings-menu-pane-main > div.settings-menu-content > form > button');
        return await element.click();
    }

    async clickDeleteConfirmation() {
        const element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
        return await element.click();
    }

    async getFirstPageTitle() {
        let element = await this.driver.$('section.view-container.content-list > div.gh-list-sticky > ol.pages-list.gh-list.feature-memberAttribution >li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:nth-child(1) > a:nth-child(1) > h3.gh-content-entry-title:nth-child(1)');
        return await element.getText();
    }

}