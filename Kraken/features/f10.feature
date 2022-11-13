Feature: Feature 10

@user1 @web
Scenario: Crear, guardar y consultar un page en draft
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 1 seconds
  And I go to pages
  And I go to create new page
  And I enter a new title "Feature 10" for page
  And I wait for 3 seconds
  And I go back to the pages list
  And I filter by newest
  And I wait for 2 seconds
  Then I see the page "Feature 10" with the Draft