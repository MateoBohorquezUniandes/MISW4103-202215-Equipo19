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
  And I publish the post
  And I wait for 2 seconds
  Then I see the confirmation of publish
  When I going back to the post editor
  And I wait for 1 seconds
  And I go back from the editor to the post section
  And I click on User settings button
  And I click on Sign out button
  Then I see the login screen
  And I send a signal to user 2 containing "post_published"
  

@user2 @web
Scenario: Ver el post creado
  Given I wait for a signal containing "post_published" for 120 seconds
  And I navigate to page "http://localhost:2368/"
  And I wait for 1 seconds
  And I go to the post page
  And I wait for 1 seconds
  Then I see the post