const Page = require("./page-v3");

class ProfilePage extends Page {

    constructor() {
        super();
    }

    get mainPanel() { return 'main.gh-main ' }
    get oldPassInput(){ return 'input#user-password-old'}
    get newPassInput(){ return 'input#user-password-new'}
    get verifyPassInput(){ return 'input#user-new-password-verification'}
    get btnChangePass(){ return 'input#user-new-password-verification'}
    get notification(){ return 'span.gh-notification-title'}

    scrollToFinal() {
        cy.get(this.mainPanel).scrollTo('bottom');
    }
    typeOldPass(pass){
        cy.get(this.oldPassInput).type(pass);
    }
    typeNewPass(pass){
        cy.get(this.newPassInput).type(pass);
    }
    typeVerifyPass(pass){
        cy.get(this.verifyPassInput).type(pass);
    }
    clickChangePass(){
        cy.get('span').contains('Change Password').click();
    }
    seeNotification(){
        expect(cy.get(this.notification).contains('Password updated'));
    }
    
}

module.exports = new ProfilePage();