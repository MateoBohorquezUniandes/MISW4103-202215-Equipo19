Feature: Crear Post

@user1 @web
Scenario: Eliminar y Consultar post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 2 seconds
  And I go to the page post
  And I wait for 2 seconds
  And I see the post sub title 'Mi Primer Post'
  And I wait for 2 seconds
  Then I see the login screen
  And I send a signal to user 2 containing "post_edited"
  
