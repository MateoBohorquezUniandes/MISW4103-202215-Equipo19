Feature: Edit Post

@user1 @web
Scenario: Editar post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 5 seconds
  And I going to the post section
  And I wait for 10 seconds
  

@user2 @web
Scenario: Ver el post editado
  Given I wait for a signal containing "post_published" for 120 seconds
  And I navigate to page "http://localhost:2368/"
  And I wait for 1 seconds
  And I go to the post page
  And I wait for 1 seconds
  Then I see the post