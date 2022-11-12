Feature: Delete Post

@user1 @web
Scenario: Eliminar post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 5 seconds
  And I going to the post section
  And I wait for 10 seconds