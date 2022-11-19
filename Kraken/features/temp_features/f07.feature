Feature: Feature 8

@user1 @web
Scenario: Editar, publicar, consultar un page 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 1 seconds
  And I go to pages
  And I go to create new page
  And I enter a new title "My awesome page title " for page
  And I enter a new body "My body page" for page
  And I go back to the pages list
  And I go to edit a page
  And I enter a new body "My body page update automatically" for page
  And I publish page
  And I wait for 10 seconds