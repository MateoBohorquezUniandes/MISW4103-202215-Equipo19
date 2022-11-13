Feature: Edit Post

@user1 @web
Scenario: Editar post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I click on New post + button
  And I wait for 2 seconds
  And I write the title of the post 'Feature 2'
  And I wait for 2 seconds
  And I publish the post
  And I wait for 1 seconds
  Then I see the confirmation of publish
  When I going back to the post editor
  And I wait for 1 seconds
  And I go back from the editor to the post section
  And I wait for 2 seconds
  And I going to the post section
  And I open the editor of the post "Feature 2"
  And I wait for 1 seconds
  And I write the title of the post "Post Editado"
  And I update the post
  And I wait for 2 seconds
  Then I see the confirmation of update
  And I go back from the editor to the post section
  And I wait for 2 seconds
  And I click user profile
  And I click sign out
  Then I see the login screen
  And I send a signal to user 2 containing "post_edited"
  

@user2 @web
Scenario: Ver el post editado
  Given I wait for a signal containing "post_edited" for 120 seconds
  And I navigate to page "http://localhost:2368/"
  And I search the post "Post Editado"
  And I wait for 1 seconds
  Then I see the post title "Post Editado"