Feature: Feature 11

@user1 @web
Scenario: Crear 2 paginas, Filtrar por antiguos, consultar un page 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 1 seconds
  And I go to pages
  And I go to create new page
  And I enter a new title "My Page 1" for page
  And I enter a new body "My body page 1" for page
  And I wait for 10 seconds
  And I go back to the pages list
  And I go to create new page
  And I enter a new title "My Page 2" for page
  And I enter a new body "My body page 2" for page
  And I wait for 10 seconds
  And I go back to the pages list
  And I filter by oldest
  Then I see first post with title "My Page 1"
  And I wait for 2 seconds
  And I click user profile
  And I click sign out
  Then I see the login screen