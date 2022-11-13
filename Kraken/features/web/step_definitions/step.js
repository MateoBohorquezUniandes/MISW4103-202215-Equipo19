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
//Sección Settings
When('I click on User settings button', async function () {
    let element = await this.driver.$('.ember-basic-dropdown-trigger');
    return await element.click();
});
//Sección Post
When('I click on New post button', async function () {
    let element = await this.driver.$('#ember25');
    return await element.click();
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
When('I going to the post section', async function () {
    let element = await this.driver.$('#ember9');
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