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
    get titlePostEditor() { return '.gh-editor-title'}
    get linkBackPage() { return 'a.ember-view.gh-btn-editor.gh-editor-back-button' }
    get settingsMenu(){ return 'button.settings-menu-toggle'}
    get btnPublish(){ return 'button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger'}
    get btnPublishPostPreview(){ return 'button.gh-btn.gh-btn-editor.gh-publish-trigger'}
    get btnUnpublish(){ return 'button.gh-btn.gh-btn-editor.gh-unpublish-trigger'}
    get btnPreviewPost(){ return '.gh-btn.gh-btn-editor.gh-editor-preview-trigger' }
    get btnContinueFinalReview(){ return 'button.gh-btn.gh-btn-black.gh-btn-large'}
    get btnPublishPostRightNow(){ return 'button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view'}
    get publishConfirmation(){return 'div.gh-post-bookmark'}
    get btnEditor(){return 'button.gh-publish-back-button'}
    get btnGoEditor() {return '.gh-btn-editor.gh-editor-back-button'}
    get btnBack(){return 'a.gh-editor-back-button'}
    get linkTitlePost(){return 'a[href="/mi-primer-post/"]'}
    get linkPostTitle(){return 'a[href="#/posts/"]'}
    get btnPostSection(){return 'li.gh-nav-list-new'}
    get btnPostPublished() {return 'li.gh-nav-viewname'}
    get btnPostSelection(){return 'h3.gh-content-entry-title'}
    get btnSettings(){return 'button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon'}
    get btnUpdate(){return '.gh-editor-save-trigger'}
    get updateConfirmation(){return 'button.gh-editor-save-trigger[disabled]'}
    get btnDeletePost() {return 'button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button'}
    get btnConfirmDeletePost() { return '.gh-btn.gh-btn-red.gh-btn-icon.ember-view' }
    get tagDropdown() { return 'form > div.form-group:nth-child(3) > div.ember-basic-dropdown > div.ember-basic-dropdown-trigger' }
    get tagOption() { return 'li.ember-power-select-option' }
    get linkOptiontagPost() { return 'div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-tag' }
    get sortPostByFirstTag() { return 'li.ember-power-select-option:nth-child(3)' }
    get firstPost() { return 'section.view-container.content-list > ol.posts-list > li:nth-child(1) > a > h3' }



    async clickNewPost() {
        let element = await this.driver.$(this.btnNewPost);
        return await element.click();
    }
    async clickPlusNewPost() {
        let element = await this.driver.$(this.btnPlusNewPost);
        return await element.click();
    }
    async openEditorPost(post) {
        var selector = '//a/h3[contains(.,"' + post + '")]'
        let element = await this.driver.$(selector);
        await element.click();
    }

    async clickDeleteConfirmationPost() {
        const element = await this.driver.$(this.btnConfirmDeletePost);
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
    async publishPost(){
        let element = await this.driver.$(this.settingsMenu);
        await element.click();
        element = await this.driver.$(this.btnPublish);
        await element.click();
        element = await this.driver.$(this.btnContinueFinalReview);
        await element.click();
        element = await this.driver.$(this.btnPublishPostRightNow);
        return await element.click();
    }

    async unpublishPost(){
        element = await this.driver.$(this.btnUnpublish);
        await element.click();
        // element = await this.driver.$(this.btnPublishPostRightNow);
        //return await element.click();
    }

    async publishPostPreview(){
        let element = await this.driver.$(this.btnPublishPostPreview);
        await element.click();
    }

    async previewPost(){
        let element = await this.driver.$(this.btnPreviewPost);
        await element.click();
    }

    async getConfirmationPublish(){ 
        let element = await this.driver.$(this.publishConfirmation)
        return element
    }
    async goBackEditor(){ 
        let element = await this.driver.$(this.btnEditor);
        return await element.click();
    }

    async goEditor(){ 
        let element = await this.driver.$(this.btnGoEditor);
        return await element.click();
    }

    async goBackToPostSection(){
        let element = await this.driver.$(this.btnBack);
        await element.click();
    }
    async goToPostPage(){
        let element = await this.driver.$(this.linkTitlePost);
        await element.click();
    }

    async goToPagePost(){
        let element = await this.driver.$(this.linkPostTitle);
        await element.click();
    }

    async clickPostSelected() {
        let element = await this.driver.$(this.btnPostSelection);
        return await element.click();
    }

    async clickPostPublished() {
        let element = await this.driver.$(this.btnPostPublished);
        return await element.click();
    }

    async clickSettingsButton() {
        let element = await this.driver.$(this.btnSettings);
        return await element.click();
    }

    async clickBtnDeletePost() {
        let element = await this.driver.$(this.btnDeletePost);
        return await element.click();
    }
    
    async getPostTitle(title){
        var selector = '//header/h1[contains(.,"' + title + '")]';
        let element = await this.driver.$(selector);
        await element.click();
    }
    async getTagTitle(title){
        var selector = '//a/h3[contains(.,"' + title + '")]';
        let element = await this.driver.$(selector);
        await element.click();
    }
    async goPostSection(){
        let element = await this.driver.$(this.btnPostSection);
        await element.click();
    }
    
    async updatePost(){
        let element = await this.driver.$(this.settingsMenu);
        await element.click();
        element = await this.driver.$(this.btnUpdate);
        return await element.click();
    }
    async getConfirmationUpdate(){
        let element = await this.driver.$(this.updateConfirmation)
        return element
    }
    async searchPost(post){
        var selector = '//header/h2[contains(.,"'+ post + '")]'
        let element = await this.driver.$(selector);
        await element.click();
    }

    async assignTag() {
        let element = await this.driver.$(this.settingsMenu);
        await element.click();
        element = await this.driver.$(this.tagDropdown);
        await element.click();
        element = await this.driver.$(this.tagOption);
        await element.click();
        element = await this.driver.$(this.settingsMenu);
        await element.click();
    }

    async clickOptionTag() {
        let element = await this.driver.$(this.linkOptiontagPost);
        return await element.click();
    }

    async clickFilterTag() {
        let element = await this.driver.$(this.sortPostByFirstTag);
        return await element.click();
    }

    async getFirstPostTitle() {
        let element = await this.driver.$(this.firstPost);
        return await element.getText();
    }
}