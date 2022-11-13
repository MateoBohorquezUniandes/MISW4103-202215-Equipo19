Feature: Crear Post

@user1 @web
Scenario: Eliminar y Consultar post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 5 seconds
  And I going to the post section
  And I wait for 10 seconds
  Then I see the confirmation of update
  And I go back from the editor to the post section
  And I wait for 5 seconds
  And I click on User settings button
  And I click on Sign out button
  Then I see the login screen
  And I send a signal to user 2 containing "post_edited"