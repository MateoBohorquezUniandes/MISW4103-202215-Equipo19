const { After, Before, BeforeAll, AfterStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const LoginPage = require('../step_definitions/page_objects/login-page');
const DashboardPage = require('../step_definitions/page_objects/dashboard-page');
const PagesPage = require('../step_definitions/page_objects/pages-page')
const MembersPage = require('../step_definitions/page_objects/members-page');
const PostsPage = require('../step_definitions/page_objects/posts-page');
const TagsPage = require('../step_definitions/page_objects/tags-page');
const SettingsPage = require('../step_definitions/page_objects/settings-page');
const fs = require('fs');
const pathDir = './screenshoots';
var cont = 0;
const { EMAIL_USER1 } = require('../../../properties.json');

Before(async function (scenario) {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.loginPage = new LoginPage(this.driver);
  this.dashboardPages = new DashboardPage(this.driver);
  this.pagesPage = new PagesPage(this.driver);
  this.postsPage = new PostsPage(this.driver);
  this.membersPage = new MembersPage(this.driver);
  this.tags = new TagsPage(this.driver);
  this.settingsPage = new SettingsPage(this.driver);
  cont = 0;
  console.log("THIS ", scenario.feature?.name, "Scenario object", scenario);
  console.log("user ", EMAIL_USER1);
})

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function ({ result, pickleStep, testCaseStartedId, testStepId }) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  cont = cont + 1;
  //console.log(this, " cont ", cont, "driver ", this.driver, "result", result, " pickle ", pickleStep)
  const ssBuffer = await this.driver.takeScreenshot();
  //console.log("DDDDD", __);
  saveScreenshot(cont, ssBuffer);
});

const saveScreenshot = async function (name, buffer) {
  await fs.writeFileSync(`${pathDir}/${name}.png`, buffer.replace(/^data:image\/png;base64,/, ''), 'base64');
  console.log(`${name}.png saved`)
};