Feature: Crear Post

@user1 @web
Scenario: Crear post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 3 seconds
  And I click on User settings button
  And I click on Sign out button
  And I wait for 3 seconds

@user2 @web
Scenario: Crear post usuario 2
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER2>"
  And I enter the password "<PASSWORD_USER2>"
  And I click on Sign in button
  And I wait for 3 seconds
  And I click on New post button
  And I wait for 3 seconds