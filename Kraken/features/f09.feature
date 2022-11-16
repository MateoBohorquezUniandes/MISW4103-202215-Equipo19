Feature: Crear, eliminar y consultar page

@user1 @web
Scenario: Crear, eliminar y consultar page
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 1 seconds
  And I go to pages
  And I go to create new page
  And I enter a new title "page test for delete 1" for page
  And I enter a new body "new page body for delete 1" for page
  And I wait for 5 seconds
  And I go back to the pages list
  And I wait for 5 seconds
  And I filter by newest
  And I wait for 1 seconds
  And I see first post with title "page test for delete 1"
  And I click the first page
  And I open settings page
  And I click delete page
  And I confirm delete the page
  And I go back to the pages list
  And I wait for 1 seconds
  Then I see the first page title is diferent than "page test for delete 1"
  And I wait for 2 seconds
  And I click user profile
  And I click sign out
  Then I see the login screen