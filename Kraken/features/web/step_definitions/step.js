const { Given, When, Then } = require('@cucumber/cucumber');
When('I enter text to search {string}',async function(search){
    let element = await this.driver.$('.gLFyf');
    return await element.setValue(search);
});
When('I click on search button', async function(){
    let element = await this.driver.$('.gNO89b');
    return await element.click();
});