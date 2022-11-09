const { Given, When, Then } = require('@cucumber/cucumber');
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
When('I click on New post button', async function(){
    let element = await this.driver.$('#ember25');
    return await element.click();
});
When('I click on User settings button', async function(){
    let element = await this.driver.$('.ember-basic-dropdown-trigger');
    return await element.click();
});
When('I click on Sign out button', async function(){
    let element = await this.driver.$('.user-menu-signout');
    return await element.click();
});