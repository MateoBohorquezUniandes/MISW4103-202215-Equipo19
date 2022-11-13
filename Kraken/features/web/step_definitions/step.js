const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
//Sección Login
When('I enter the username {kraken-string}', async function (username) {
    return this.loginPage.setUserName(username);
});
When('I enter the password {kraken-string}', async function (password) {
    return this.loginPage.setPassword(password);
});
When('I click on Sign in button', async function () {
    return this.loginPage.clickSignInButton();
});
When('I click on Sign out button', async function () {
    let element = await this.driver.$('.user-menu-signout');
    return await element.click();
});
When('I sign in with user {kraken-string} and password {kraken-string}', async function (username, password) {
    return await this.loginPage.signInGosht(username, password);
});
Then('I see the login screen', async function () {
    expect(await this.driver.$('button.login'));
});
//Sección Settings
When('I click on User settings button', async function () {
    let element = await this.driver.$('.ember-basic-dropdown-trigger');
    return await element.click();
});
//Sección Post
When('I click on New post + button', async function () {
    return await this.postsPage.clickPlusNewPost();
});
When('I write the title of the post {string}', async function (title) {
    let element = await this.driver.$('.gh-editor-title');
    return await element.setValue(title);
});
When('I add an image', async function () {
    let element = await this.driver.$('.gh-editor-feature-image-unsplash');
    await element.click();
    element = await this.driver.$('.gh-unsplash-photo-container');
    await element.focus();
    element = await this.driver.$('.gh-unsplash-button');
    await element.click();
});
When('I add a text', async function () {
    let element = await this.driver.$('.koenig-editor');
    return await element.click();
});
When('I publish the post', async function () {
    let element = await this.driver.$('.settings-menu-toggle');
    await element.click();
    element = await this.driver.$('.gh-publish-trigger');
    await element.click();
    element = await this.driver.$('.gh-btn-large');
    await element.click();
    element = await this.driver.$('.gh-btn-pulse');
    return await element.click();
});
Then('I see the confirmation of publish', async function () {
    expect(await this.driver.$('div.gh-post-bookmark'));
});
When('I go to the post page', async function () {
    let element = await this.driver.$('a[href="/mi-primer-post/"]');
    await element.click();
});
Then('I see the post', async function () {
    expect(await this.driver.$('h1.article-title'));
});
When('I going to the post section', async function(){
    let element = await this.driver.$('li.gh-nav-list-new');
    await element.click();
});
//Temporal
When('I going back to the post editor', async function () {
    let element = await this.driver.$('button.gh-publish-back-button');
    await element.click();
});
When('I go back from the editor to the post section', async function () {
    let element = await this.driver.$('a.gh-editor-back-button');
    await element.click();
});
Then('I see the login screen', async function () {
    expect(await this.driver.$('button.login'));
});
When('I open the editor of the post {string}', async function(post){
    var selector = '//a/h3[contains(.,"'+ post + '")]'
    let element = await this.driver.$(selector);
    await element.click();
});
When('I update the post', async function(){
    let element = await this.driver.$('.settings-menu-toggle');
    await element.click();
    element = await this.driver.$('.gh-editor-save-trigger');
    return await element.click();
});
Then('I see the confirmation of update', async function(){
    expect(await this.driver.$('button.gh-editor-save-trigger[disabled]'));
});
Then('I see the title', async function(){
    expect(await this.driven.$(''))
});
//Pages
When('I go to pages', async function () {
    return await this.homePage.goToPages();
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
    return await this.pagesPage.publishPage();
});

When('I click page with title {kraken-string}', async function (title) {
    return await this.pagesPage.clickThePageWithTitle(title);
});

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

When('I get post title', async function () {
    this.postsPage.getPostTitle()
});

When('I click back page', async function () {
    this.postsPage.clickBackPage()
});

When('I click user profile', async function () {
    this.dashboardPages.clickUserProfile()
});

When('I click sign out', async function () {
    this.dashboardPages.clickSignOut()
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