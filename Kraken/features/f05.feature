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
  And I write the title of the post 'The awesome post'
  And I enter a new body "My body page" for page
  And I wait for 10 seconds
  And I go back from the editor to the post section
  And I wait for 5 seconds
  And I open the editor of the post 'The awesome post'
  And I write the title of the post 'The awesome post Editado'
  And I enter a new body " edit" for page
  And I wait for 5 seconds
  And I go back from the editor to the post section
  And I wait for 5 seconds
  Then I see first post with title "The awesome post Editado"
  And I click user profile
  And I click sign out
  Then I see the login screen
  
