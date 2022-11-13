module.exports = class PagesPage {

    constructor(driver) {
        this.driver = driver;
    }

    get username() { return '#identification' };
    get password() { return '#password' }
    get signInButton() { return '#ember7' }

    async goToNewPage() {
        const element = await this.driver.$('a[href="#/editor/page/"]');
        await element.click()
    }

    async enterPageTitle(pageTitle) {
        const element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
        return await element.setValue(pageTitle);
    }

    async enterPageBody(pageBody) {
        let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
        await element.click();
        element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
        return await element.setValue(pageBody);
    }

    async goBackToPagesList() {
        const element = await this.driver.$('a[href="#/pages/"]');
        return await element.click()
    }

    async clickThePageWithTitle(title) {
        let elements = await this.driver.$$('.gh-content-entry-title');
        elements.forEach(element => {
            console.log(element.getText());
        });

    }

    async goToEditPage() {
        const element = await this.driver.$('.ember-view permalink.gh-list-data.gh-post-list-button');
        return await element.click()
    }

    async publishPage() {
        let element = await this.driver.$('.gh-btn gh-btn-editor.darkgrey.gh-publish-trigger');
        await element.click();
        element = await this.driver.$('.gh-btn.gh-btn-black.gh-btn-large');
        element.click();
        element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
        return element.click();

    }
}