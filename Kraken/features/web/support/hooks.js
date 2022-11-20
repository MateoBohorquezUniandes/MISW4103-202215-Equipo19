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
let cont = 0;
const { VERSION } = require('../../../properties.json');
let feature;
const featureLenght = VERSION == '5.22.10' ? 11 : 14;
const LoginPageV3 = require('../step_definitions/page_objects/v3/login-page');
const PostsPageV3 = require('../step_definitions/page_objects/v3/posts-page');
const DashboardPageV3 = require('../step_definitions/page_objects/v3/dashboard-page');

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
  feature = scenario.gherkinDocument.uri
    .substring(scenario.gherkinDocument.uri.length - featureLenght)
    .split('.')[0];
  feature = VERSION == '5.22.10' ? feature : feature.substring(0, 3);
  this.loginPageV3 = new LoginPageV3(this.driver);
  this.postsPageV3 = new PostsPageV3(this.driver);
  this.dashboardPagesV3 = new DashboardPageV3(this.driver);
  this.version = VERSION;
})

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function ({ result, pickleStep, testCaseStartedId, testStepId }) {
  cont = cont + 1;
  const ssBuffer = await this.driver.takeScreenshot();
  saveScreenshot(cont, ssBuffer);
});

const saveScreenshot = async function (name, buffer) {
  const dir = `${pathDir}/${VERSION}/${feature}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  await fs.writeFileSync(`${dir}/${name}.png`, buffer.replace(/^data:image\/png;base64,/, ''), 'base64');
  console.log(`${name}.png saved`)
};