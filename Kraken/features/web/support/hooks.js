const { After, Before, BeforeAll } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const LoginPage = require('../step_definitions/page_objects/login-page');
const HomePage = require('../step_definitions/page_objects/home-page');
const PagesPage = require('../step_definitions/page_objects/pages-page')

Before(async function () {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.loginPage = new LoginPage(this.driver);
  this.homePage = new HomePage(this.driver);
  this.pagesPage = new PagesPage(this.driver);
})

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
