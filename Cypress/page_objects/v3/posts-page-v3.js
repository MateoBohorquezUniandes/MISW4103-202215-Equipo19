const Page = require("./page-v3");

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
    get btnPublish() { return 'div.gh-publishmenu-trigger' }
    get btnPublish2() { return 'button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view' }
    get btnContinueFinalReview() { return 'button.gh-btn.gh-btn-black.gh-btn-large' }
    get btnPublishPostRightNow() { return 'button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view' }
    get publishConfirmation() { return 'span.gh-notification-title' }
    get btnEditor() { return 'button.gh-publish-back-button' }
    get btnBack() { return 'a.gh-editor-back-button' }
    get linkTitlePost() { return 'a[href="/mi-primer-post/"]' }
    get btnPostSection() { return 'a[href="#/posts/"]' }
    get btnPostPublished() {return 'li.gh-nav-viewname'}
    get btnUpdate() { return '.gh-editor-save-trigger' }
    get updateConfirmation() { return 'button.gh-editor-save-trigger[disabled]' }
    get linkPostTitle() { return 'ul.gh-nav-list.gh-nav-manage > li:nth-child(1) > a:nth-child(1)' }
    get btnPostSelection() { return 'h3.gh-content-entry-title' }
    get btnSettings() { return 'button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon' }
    get btnDeletePost() { return 'button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button' }
    get btnConfirmDeletePost() { return '.gh-btn.gh-btn-red.gh-btn-icon.ember-view' }
    get listTagsEditor() { return 'div#tag-input' }
    get tagOnList(){ return 'li.ember-power-select-option'}


    clickNewPost() {
        cy.get(this.btnNewPost).click();
    }
    clickPlusNewPost() {
        cy.get(this.btnPlusNewPost).click();
    }

    clickOptionSort() {
        cy.get(this.linkOptionSortPost).click();
    }

    clickSortPostByOldest() {
        cy.get(this.sortPostByOdelst).click();
    }

    clickFirstPost() {
        cy.get(this.fistPostList).click();
    }

    clickLastPost() {
        cy.get(this.lastPostList).click();
    }

    getPostTitleEditor() {
        return cy.get(this.titlePostEditor)
    }

    clickBackPage() {
        cy.get(this.linkBackPage).click();
    }

    writePostTitle(title) {
        cy.get(this.titlePostEditor).type(title);
    }

    cleanPostTitle() {
        cy.get(this.titlePostEditor).clear()
    }
    publishPost() {
        cy.get('.koenig-editor__editor.__mobiledoc-editor').click();
        cy.get(this.btnPublish).click();
        cy.get(this.btnPublish2).contains("Publish").click();
    }
    openSettingsMenu() {
        cy.get(this.settingsMenu).click();
    }
    getConfirmationPublish() {
        expect(cy.get(this.publishConfirmation).contains("Published"));
    }
    goBackEditor() {
        cy.get(this.btnEditor).click();
    }
    goBackToPostSection() {
        cy.get(this.btnPostSection).first().click();
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
    focusPostSection(){
        cy.get(this.btnPostSection).first().focus()
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

    goToPagePost() {
        cy.get(this.linkPostTitle).click();
    }

    clickPostSelected() {
        cy.get(this.btnPostSelection).click();
    }

    clickPostPublished(){
        cy.get(this.btnPostPublished).click();
    }

    clickSettingsButton() {
        cy.get(this.btnSettings).click();
    }

    clickBtnDeletePost() {
        cy.get(this.btnDeletePost).click();
    }

    clickDeleteConfirmationPost() {
        cy.get(this.btnConfirmDeletePost).click();
    }

    publishSchedulePost() {
        cy.get('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.get('div.gh-publish-setting.last > button.gh-publish-setting-title').click();
        cy.get('div.gh-publish-schedule > div:last-child').click();
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
        cy.get('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
    }

    clickFilterPagesBySchedule() {
        cy.get("div.gh-contentfilter-menu.gh-contentfilter-type").click();
        cy.get('li.ember-power-select-option:nth-child(4)').click();
    }
    asingTag(tag){
        cy.get(this.listTagsEditor).click();
        cy.get(this.tagOnList).contains(tag).click();
    }

}

module.exports = new PostsPage();