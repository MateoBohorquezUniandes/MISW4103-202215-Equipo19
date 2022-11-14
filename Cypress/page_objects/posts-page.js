const Page = require("./page");

class PostsPage extends Page {
    constructor() {
        super();
    }

    get linkOptionSortPost() { return 'div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-sort' }
    get btnNewPost() { return '#ember157' }
    get btnPlusNewPost() { return 'a[title="New post"]' }
    get fistPostList() { return 'section.view-container.content-list > ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:nth-child(1) > a:nth-child(1) > h3.gh-content-entry-title:nth-child(1)' }
    get lastPostList() { return 'section.view-container.content-list > ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:last-child > a:nth-child(1) > h3.gh-content-entry-title' }
    get sortPostByOdelst() { return 'li.ember-power-select-option:nth-child(2)' }
    get titlePostEditor() { return '.gh-editor-title' }
    get linkBackPage() { return 'a.ember-view.gh-btn-editor.gh-editor-back-button' }
    get settingsMenu() { return 'button.settings-menu-toggle' }
    get btnPublish() { return 'button.gh-publish-trigger' }
    get btnContinueFinalReview() { return 'button.gh-btn.gh-btn-black.gh-btn-large' }
    get btnPublishPostRightNow() { return 'button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view' }
    get publishConfirmation() { return 'div.gh-post-bookmark' }
    get btnEditor() { return 'button.gh-publish-back-button' }
    get btnBack() { return 'a.gh-editor-back-button' }
    get linkTitlePost() { return 'a[href="/mi-primer-post/"]' }
    get btnPostSection() { return 'li.gh-nav-list-new' }
    get btnUpdate() { return '.gh-editor-save-trigger' }
    get updateConfirmation() { return 'button.gh-editor-save-trigger[disabled]' }

    clickNewPost() {
        cy.get(this.btnNewPost).click();
    }
    
    clickPlusNewPost() {
        cy.get(this.btnPlusNewPost).click();
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

    async getPostTitleEditor() {
        let element = await this.driver.$(this.titlePostEditor);
        return await element.getValue();
    }

    async clickBackPage() {
        let element = await this.driver.$(this.linkBackPage);
        return await element.click();
    }
    async writePostTitle(title) {
        let element = await this.driver.$(this.titlePostEditor);
        return await element.setValue(title);
    }
    cleanPostTitle(){
        cy.get(this.titlePostEditor).clear()
    }
    publishPost() {
        cy.get(this.settingsMenu).click();
        cy.get(this.btnPublish).click();
        cy.get(this.btnContinueFinalReview).click();
        cy.get(this.btnPublishPostRightNow).click();
    }
    getConfirmationPublish() {
        expect(cy.get(this.publishConfirmation));
    }
    goBackEditor() {
        cy.get(this.btnEditor).click();
    }
    goBackToPostSection() {
        cy.get(this.btnBack).click();
    }
    goToPostPage() {
        cy.get(this.linkTitlePost).click();
    }
    getPostTitle(title) {
        cy.get('h1').contains(title).click();
    }
    goPostSection() {
        cy.get(this.btnPostSection).click();
    }
    openEditorPost(post) {
        cy.get('h3').contains(post).click();
    }
    updatePost() {
        cy.get(this.settingsMenu).click();
        cy.get(this.btnUpdate).click();
    }
    getConfirmationUpdate() {
        expect(cy.get(this.updateConfirmation));
    }
    searchPost(post) {
        cy.get('h2').contains(post).click();;
    }
}

module.exports = new PostsPage();