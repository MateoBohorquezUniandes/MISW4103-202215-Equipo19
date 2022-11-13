module.exports = class PostsPage {
    constructor(driver) {
        this.driver = driver;
    }

    get linkOptionSortPost() { return 'div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-sort' }
    get btnNewPost() { return '#ember157' }
    get btnPlusNewPost() { return 'a[title="New post"]'}
    get fistPostList() { return 'section.view-container.content-list > ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:nth-child(1) > a:nth-child(1) > h3.gh-content-entry-title:nth-child(1)' }
    get lastPostList() { return 'section.view-container.content-list > ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:last-child > a:nth-child(1) > h3.gh-content-entry-title' }
    get sortPostByOdelst() { return 'li.ember-power-select-option:nth-child(2)' }
    get titlePost() { return 'textarea.gh-editor-title.ember-text-area.gh-input.ember-view' }
    get linkBackPage() { return 'a.ember-view.gh-btn-editor.gh-editor-back-button' }

    async clickNewPost() {
        let element = await this.driver.$(this.btnNewPost);
        return await element.click();
    }
    async clickPlusNewPost() {
        let element = await this.driver.$(this.btnPlusNewPost);
        return await element.click();
    }

    async clickOptionSort() {
        let element = await this.driver.$(this.linkOptionSortPost);
        return await element.click();
    }

    async clickSortPostByOldest() {
        let element = await this.driver.$(this.sortPostByOdelst);
        return await element.click();
    }

    async clickFirstPost() {
        let element = await this.driver.$(this.fistPostList);
        return await element.click();
    }

    async clickLastPost() {
        let element = await this.driver.$(this.lastPostList);
        return await element.click();
    }

    async getPostTitle() {
        let element = await this.driver.$(this.titlePost);
        return await element.getValue();
    }

    async clickBackPage() {
        let element = await this.driver.$(this.linkBackPage);
        return await element.click();
    }

}