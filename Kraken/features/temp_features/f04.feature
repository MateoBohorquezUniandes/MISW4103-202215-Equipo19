Feature: Crear Post

@user1 @web
Scenario: Crear post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 5 seconds
  And I click on New post + button
  And I wait for 3 seconds
  And I write the title of the post 'Mi Primer Post'
  And I wait for 2 seconds
  And I click on settings
  And I wait for 2 seconds
  And I click on settings
  And I preview the post
  And I wait for 2 seconds
  And I publish the post preview
  And I wait for 2 seconds
  And I publish the post
  And I see the confirmation of publish
  And I wait for 2 seconds
  And I going to the post editor
  And I wait for 2 seconds
  Then I see the login screen
  And I wait for 2 seconds
  And I click user profile
  And I click sign out
 
