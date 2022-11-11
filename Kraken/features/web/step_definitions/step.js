const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
//Sección Login
When('I enter the username {kraken-string}',async function(username){
    let element = await this.driver.$('#ember6');
    return await element.setValue(username);
});
When('I enter the password {kraken-string}',async function(password){
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});
When('I click on Sign in button', async function(){
    let element = await this.driver.$('#ember10');
    return await element.click();
});
When('I click on Sign out button', async function(){
    let element = await this.driver.$('.user-menu-signout');
    return await element.click();
});
//Sección Settings
When('I click on User settings button', async function(){
    let element = await this.driver.$('.ember-basic-dropdown-trigger');
    return await element.click();
});
//Sección Post
When('I click on New post button', async function(){
    let element = await this.driver.$('#ember25');
    return await element.click();
});
When('I write the title of the post {string}', async function(title){
    let element = await this.driver.$('.gh-editor-title');
    return await element.setValue(title);
});
When('I add an image', async function(){
    let element = await this.driver.$('.gh-editor-feature-image-unsplash');
    await element.click();
    element = await this.driver.$('.gh-unsplash-photo-container');
    await element.focus();
    element = await this.driver.$('.gh-unsplash-button');
    await element.click();
});
When('I add a text', async function(){
    let element = await this.driver.$('.koenig-editor');
    return await element.click();
});
When('I publish the post', async function(){
    let element = await this.driver.$('.settings-menu-toggle');
    await element.click();
    element = await this.driver.$('.gh-publish-trigger');
    await element.click();
    element = await this.driver.$('.gh-btn-large');
    await element.click();
    element = await this.driver.$('.gh-btn-pulse');
    return await element.click();
});
Then('I see the confirmation of publish', async function(){
    expect(await this.driver.$('div.gh-post-bookmark'));
});
When('I go to the post page', async function(){
    let element = await this.driver.$('a[href="/mi-primer-post/"]');
    await element.click();
});
Then('I see the post', async function(){
    expect(await this.driver.$('h1.article-title'));
});
When('I going to the post section', async function(){
    let element = await this.driver.$('#ember9');
    await element.click();
});