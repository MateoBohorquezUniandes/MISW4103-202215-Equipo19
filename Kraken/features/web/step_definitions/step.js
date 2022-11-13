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
When('I click sign out', async function () {
    this.dashboardPages.clickSignOut()
});
When('I sign in with user {kraken-string} and password {kraken-string}', async function (username, password) {
    return await this.loginPage.signInGosht(username, password);
});
Then('I see the login screen', async function () {
    expect(await this.loginPage.seeLoginScreen());
});
//Sección Settings
When('I click user profile', async function () {
    this.dashboardPages.clickUserProfile()
});
//Sección Post
When('I click on New post + button', async function () {
    return await this.postsPage.clickPlusNewPost();
});
When('I write the title of the post {string}', async function (title) {
    return await this.postsPage.writePostTitle(title);
    //let element = await this.driver.$('.gh-editor-title');
    //return await element.setValue(title);
});
When('I publish the post', async function () {
    return await this.postsPage.publishPost();
});
Then('I see the confirmation of publish', async function () {
    expect(await this.postsPage.getConfirmationPublish());
});
When('I go to the post page', async function () {
    return await this.postsPage.goToPostPage();
});
Then('I see the post title {string}', async function (title) {
    expect(await this.postsPage.getPostTitle(title));
});
When('I going to the post section', async function(){
    let element = await this.driver.$('li.gh-nav-list-new');
    await element.click();
});
//Temporal
When('I going back to the post editor', async function () {
    await this.postsPage.goBackEditor();
});
When('I go back from the editor to the post section', async function () {
    await this.postsPage.goBackToPostSection();
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

<<<<<<< Updated upstream
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
    this.postsPage.getPostTitleEditor()
});

When('I click back page', async function () {
    this.postsPage.clickBackPage()
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
=======
//Tag
When('I go to tag', async function () {
    return await  this.dashboardPages.goToTags();
});

When('I go to create new tag', async function() {
    return await this.tags.clickTagsNew();
});

When('I enter a new name {kraken-string} for tag', async function (tagName){
    return await this.tags.setTagName(tagName);
});

When('I click on newTag button',async function() {
    return await this.tags.clickBtnSaveTag();
});

When('I go to nameTag', async function(){
    
}
);
>>>>>>> Stashed changes
