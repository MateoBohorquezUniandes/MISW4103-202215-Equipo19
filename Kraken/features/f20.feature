Feature: Feature 12

@user1 @web
Scenario: Crear, consultar, asignar tag a un post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 1 seconds
  And I go to pages
  And I go to create new page
  And I enter a new title "My awesome page title" for page
  And I enter a new body "My body page" for page
  And I wait for 5 seconds
  And I publish page scheduled
  And I wait for 1 seconds
  And I click back page editor
  And I wait for 1 seconds
  And I go back to the pages list
  And I wait for 1 seconds
  And I click Filter Pages By Schedule
  And I filter by newest
  And I wait for 1 seconds
  Then I see first post with title "My awesome page title"
  And I wait for 2 seconds
  And I click user profile
  And I click sign out
  Then I see the login screen
 