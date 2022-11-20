const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
//Sección Login
When('I enter the username {kraken-string}', async function (username) {
    if (this.version == '3.42.0')
        return this.loginPageV3.setUserName(username);

    return this.loginPage.setUserName(username);
});
When('I enter the password {kraken-string}', async function (password) {
    if (this.version == '3.42.0')
        return this.loginPageV3.setPassword(password);

    return this.loginPage.setPassword(password);
});
When('I click on Sign in button', async function () {
    if (this.version == '3.42.0')
        return this.loginPageV3.clickSignInButton();

    return this.loginPage.clickSignInButton();
});
When('I click sign out', async function () {
    if (this.version == '3.42.0')
        this.dashboardPagesV3.clickSignOut()

    this.dashboardPages.clickSignOut()
});
When('I sign in with user {kraken-string} and password {kraken-string}', async function (username, password) {
    return await this.loginPage.signInGosht(username, password);
});
Then('I see the login screen', async function () {
    if (this.version == '3.42.0')
        expect(await this.loginPageV3.seeLoginScreen());

    expect(await this.loginPage.seeLoginScreen());
});
//Sección Settings
When('I click user profile', async function () {
    if (this.version == '3.42.0')
        this.dashboardPagesV3.clickUserProfile();

    this.dashboardPages.clickUserProfile();
});

//Sección Post

When('I confirm delete the post', async function () {
    return await this.postsPage.clickDeleteConfirmationPost();
});

When('I go to the page post', async function () {
    return await this.postsPage.goToPagePost();
});

When('I go to delete post', async function() {
    return await this.postsPage.clickBtnDeletePost();
});

When('I click on New post + button', async function () {
    if (this.version == '3.42.0')
        return await this.postsPageV3.clickPlusNewPost();

    return await this.postsPage.clickPlusNewPost();
});
When('I write the title of the post {string}', async function (title) {
    if (this.version == '3.42.0')
        return await this.postsPageV3.writePostTitle(title);

    return await this.postsPage.writePostTitle(title);
});
When('I publish the post preview', async function () {
    return await this.postsPage.publishPostPreview();
});
When('I publish the post', async function () {
    if (this.version == '3.42.0')
        return await this.postsPageV3.publishPost();

    return await this.postsPage.publishPost();
});
When('I preview the post', async function () {
    return await this.postsPage.previewPost();
});
When('I go the post unpublish', async function () {
    return await this.postsPage.unpublishPost();
});
Then('I see the confirmation of publish', async function () {
    if (this.version == '3.42.0')
        expect(await this.postsPageV3.getConfirmationPublish());

    expect(await this.postsPage.getConfirmationPublish());
});

When('I go to the post page', async function () {
    return await this.postsPage.goToPostPage();
});

When('I go to the post title {kraken-string}', async function (text) {
    return await this.postsPage.goToPagePost(text);

});

When('I click select the post {string}', async function (title){
    expect(await this.postsPage.clickPostSelected(title));
});

When('I click on published posts', async function (){
    expect(await this.postsPage.clickPostPublished());
});


When('I click on settings', async function(){
    expect(await this.postsPage.clickSettingsButton());
});


Then('I see the post title {string}', async function (title) {
    expect(await this.postsPage.getPostTitle(title));
});
Then('I see the post sub title {string}', async function (title) {
    expect(await this.postsPage.getPostSubTitle(title));
});
When('I going to the post section', async function () {
    if (this.version == '3.42.0')
        return await this.postsPageV3.goPostSection();

    return await this.postsPage.goPostSection();
});
When('I search the post {string}', async function (title) {
    return await this.postsPage.searchPost(title);
});
When('I going back to the post editor', async function () {
    if (this.version == '3.42.0')
        await this.postsPageV3.goBackEditor();

    await this.postsPage.goBackEditor();
});

When('I going to the post editor', async function () {
    await this.postsPage.goEditor();
});

When('I go back from the editor to the post section', async function () {
    if (this.version == '3.42.0')
        await this.postsPageV3.goBackToPostSection();
    await this.postsPage.goBackToPostSection();
});
When('I open the editor of the post {string}', async function (post) {
    if (this.version == '3.42.0')
        await this.postsPageV3.openEditorPost(post);
    await this.postsPage.openEditorPost(post);
});
When('I update the post', async function () {
    if (this.version == '3.42.0')
        await this.postsPageV3.updatePost();
    await this.postsPage.updatePost();
});
Then('I see the confirmation of update', async function () {
    if (this.version == '3.42.0')
        expect(await this.postsPageV3.getConfirmationUpdate());
    expect(await this.postsPage.getConfirmationUpdate());
});

When('I click post pane', async function () {
    if (this.version == '3.42.0')
        await this.postsPageV3.focusEditor();
});

When('I click tag option', async function () {
    await this.postsPage.clickOptionTag();
});

When('I filter by the first tag', async function () {
    await this.postsPage.clickFilterTag();
});

Then('I see post title {kraken-string}', async function (title) {
    const pageTitle = await this.postsPage.getFirstPostTitle(title);
    expect(pageTitle).to.eql(title)
});

//Seccion Pages
When('I go to pages', async function () {
    return await this.dashboardPages.goToPages();
});

When('I go to create new page', async function () {
    return await this.pagesPage.goToNewPage();
});

When('I enter a new title {kraken-string} for page', async function (title) {
    return await this.pagesPage.enterPageTitle(title);
});

When('I enter a new body {kraken-string} for page', async function (body) {
    return await this.pagesPage.enterPageBody(body);
});

When('I go back to the pages list', async function () {
    return await this.pagesPage.goBackToPagesList();
});

When('I go to edit a page', async function () {
    return await this.pagesPage.goToEditPage();
});

When('I publish page', async function () {
    if (this.version == '3.42.0')
        return await this.pagesPage.publishPageV3();    
    return await this.pagesPage.publishPage();
});

When('I filter by newest', async function () {
    if (this.version == '3.42.0')
        return await this.pagesPage.clickSortPagesByNewestV3();
    return await this.pagesPage.clickSortPagesByNewest();
});

When('I click the first page', async function () {
    if (this.version == '3.42.0')
        return await this.pagesPage.clickTheFirstPageV3();

    return await this.pagesPage.clickTheFirstPage();
});

When('I go back to page editor', async function () {
    return await this.pagesPage.goToEditor();
});

When('I filter by published', async function () {
    if (this.version == '3.42.0')
        return await this.pagesPage.clickSortPagesByPublishedV3();
    return await this.pagesPage.clickSortPagesByPublished();
});

When('I click the type page filter', async function () {
    if (this.version == '3.42.0')
        return await this.pagesPage.clickOptionTypePageV3();
    return await this.pagesPage.clickOptionTypePage();
});

Then('I see first post with title {kraken-string}', async function (title) {
    const pageTitle = await this.pagesPage.findPageTitle(title);
    expect(pageTitle).to.eql(title)
});

When('I filter by oldest', async function () {
    return await this.pagesPage.clickSortPagesByOldest();
});

Then('I see the page {string} with the Draft', async function (page) {
    if (this.version == '3.42.0')
        expect(await this.pagesPage.getDraftOnListV3(page))
    else
        expect(await this.pagesPage.getDraftOnList(page))
})

When('I open settings page', async function () {
    if (this.version == '3.42.0')
        return await this.pagesPage.clickPageSettingsV3();

    return await this.pagesPage.clickPageSettings();
});

When('I click delete option', async function () {
    return await this.pagesPage.clickDelete();
});

When('I click delete page', async function () {
    if (this.version == '3.42.0')
        return await this.pagesPage.clickDeleteV3();
    return await this.pagesPage.clickDelete();
});

When('I confirm delete the page', async function () {
    return await this.pagesPage.clickDeleteConfirmation();
});

Then('I see the first page title is diferent than {string}', async function (pageTitle) {
    let element;
    if (this.version == '3.42.0')
        element = await this.pagesPage.getFirstPageTitleV3();
    else
        element = await this.pagesPage.getFirstPageTitle();

    expect(element).to.not.eql(pageTitle);
})

When('I publish page scheduled', async function () {
    return await this.pagesPage.publishScheduledPage();
});

When('I click back page editor', async function () {
    return await this.pagesPage.btnBackEditor();
});

When('I click Filter Pages By Schedule', async function () {
    return await this.pagesPage.clickFilterPagesBySchedule();
});
//Fin seccion page

When('I click menu post', async function () {
    this.dashboardPages.clickMenuPost()
});

When('I click option sort', async function () {
    this.postsPage.clickOptionSort()
});

When('I click sort by oldest', async function () {
    this.postsPage.clickSortPostByOldest()
});

When('I click first post', async function () {
    this.postsPage.clickFirstPost()
});

When('I click last post', async function () {
    this.postsPage.clickLastPost()
});

When('I click back page', async function () {
    this.postsPage.clickBackPage()
});

When('I assign tag to post', async function () {
    this.postsPage.assignTag()
});


When('I click menu members', async function () {
    this.dashboardPages.clickBtnMenuMembers()
});

When('I click new member', async function () {
    this.membersPage.clickBtnNewMember()
});

When('I enter member name {kraken-string}', async function (text) {
    this.membersPage.setMemberName(text)
});

When('I enter member email {kraken-string}', async function (text) {
    this.membersPage.setMemberEmail(text)
});

When('I click save member', async function () {
    this.membersPage.clickBtnSaveMember()
});
//Tag
When('I go to tag', async function () {
    return await this.dashboardPages.goToTags();
});

When('I go to create new tag', async function() {
    return await this.tags.clickBtnNewTags();
});

When('I enter a new name {kraken-string} for tag', async function (tagName) {
    return await this.tags.setTagName(tagName);
});

When('I click on newTag button', async function () {
    return await this.tags.clickBtnSaveTag();
});

When('I see the tag title {string}', async function (text) {
    return await this.tags.getTagName(text);
});

When('I go to delete tag', async function() {
    return await this.tags.clickBtnDeleteTag();
});

When('I see not found the tag title {string}', async function(text) {
    return await this.tags.getTagName(text);
});

When('I go back from editor to tag list', async function () {
    return await this.tags.clickGoBackTags;
});

//Settings
When('I click menu settings', async function () {
    this.settingsPage.clickSettingsButton()
});

When('I click navigation option', async function () {
    this.settingsPage.clickNavigationOption()
});

When('I enter primary navigation name {kraken-string}', async function (text) {
    this.settingsPage.setNavigationName(text)
});

When('I click save navigation', async function () {
    this.settingsPage.clickSaveNavigationButton()
});

When('I click menu view site', async function () {
    this.settingsPage.clickSiteMenu()
});

When('I click delete last navigation option', async function () {
    this.settingsPage.clickDeleteLastNavigationOption()
});

Then('I see the primary navigation {string}', async function (name) {
    const navigationName = await this.settingsPage.getNavigationName(name)
    expect(navigationName).to.eql(name)
});


//------V3--------//

//Sección Login
When('I enter the username {kraken-string} v3', async function (username) {
    return this.loginPageV3.setUserName(username);
});
When('I enter the password {kraken-string} v3', async function (password) {
    return this.loginPageV3.setPassword(password);
});
When('I click on Sign in button v3', async function () {
    return this.loginPageV3.clickSignInButton();
});

