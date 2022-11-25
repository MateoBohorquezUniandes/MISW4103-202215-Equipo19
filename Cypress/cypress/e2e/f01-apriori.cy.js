const loginPage = require("../../page_objects/login-page");
const postsPage = require("../../page_objects/posts-page");
const dashboardPages = require("../../page_objects/dashboard-page");
const screenshotFunction = require("../../page_objects/screenshot-function");

describe('Login Suite', () => {
    const availablefixtures = [
        {
            name: "loginPasswordIncorrect",
            context: "login Password Incorrect",
        },
        {
            name: "loginEmailIncorrect",
            context: "login Email Incorrect",
        },
        {
            name: "loginEmailEmpty",
            context: "login Email Empty",
        },
        {
            name: "loginPasswordEmpty",
            context: "login Password Empty",
        },
        {
            name: "loginValidUserPassword",
            context: "login Valid Credentials",
        },
    ];

    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {

            beforeEach(function () {
                cy.viewport(1366, 768);
                cy.fixture('login_fixture/' + afixture.name).as("userDetails");
            });
            it('Login test ' + afixture.name, function () {
                loginPage.visit('http://localhost:2368/ghost/#/signin');
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                cy.wait(1000)
                loginPage.setUserName(this.userDetails.email);
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                loginPage.setPassword(this.userDetails.password);
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                loginPage.clickSignInButton();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                cy.wait(5000);
                postsPage.clickPlusNewPost();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                cy.wait(3000);
                postsPage.writePostTitle("Mi Primer Post");
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                postsPage.publishPost();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                cy.wait(2000);
                postsPage.getConfirmationPublish();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                postsPage.goBackEditor();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                cy.wait(1000);
                postsPage.goBackToPostSection();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                dashboardPages.clickUserProfile();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                dashboardPages.clickSignOut();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
                loginPage.seeLoginScreen();
                cy.screenshot(screenshotFunction.getStep(Cypress.spec));
            })
            // it('Ver post creado',()=> {
            //   cy.visit('http://localhost:2368/');
            //   cy.screenshot(screenshotFunction.getStep(Cypress.spec));
            //   cy.wait(1000);
            //   postsPage.goToPostPage();
            //   cy.screenshot(screenshotFunction.getStep(Cypress.spec));
            //   cy.wait(1000);
            //   postsPage.getPostTitle("Mi Primer Post");
            //   cy.screenshot(screenshotFunction.getStep(Cypress.spec));
            // })
        });
    });

})