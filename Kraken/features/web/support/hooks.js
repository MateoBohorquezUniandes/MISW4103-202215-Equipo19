const { After, Before, BeforeAll } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const LoginPage = require('../step_definitions/page_objects/login-page');
const DashboardPage = require('../step_definitions/page_objects/dashboard-page');
const PagesPage = require('../step_definitions/page_objects/pages-page')
const MembersPage = require('../step_definitions/page_objects/members-page');
const PostsPage = require('../step_definitions/page_objects/posts-page');
const TagsPage = require('../step_definitions/page_objects/tags-page');

Before(async function () {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.loginPage = new LoginPage(this.driver);
  this.dashboardPages = new DashboardPage(this.driver);
  this.pagesPage = new PagesPage(this.driver);
  this.postsPage = new PostsPage(this.driver);
  this.membersPage = new MembersPage(this.driver);
  this.tags = new TagsPage(this.driver);
})

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
