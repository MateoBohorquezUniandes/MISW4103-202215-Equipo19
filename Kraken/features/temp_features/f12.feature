Feature: Feature 12

@user1 @web
Scenario: Crear, consultar, asignar tag a un post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 1 seconds
  And I go to tag
  And I go to create new tag
  And I enter a new name "aa" for tag
  And I click on newTag button
  And I wait for 5 seconds
  And I click on New post + button
  And I wait for 1 seconds
  And I write the title of the post 'some posts out there'
  And I enter a new body "test" for page
  And I wait for 1 seconds
  And I assign tag to post
  And I wait for 10 seconds
  And I go back from the editor to the post section
  And I wait for 10 seconds
  And I click tag option
  And I wait for 1 seconds
  And I filter by the first tag
  And I wait for 1 seconds
  Then I see post title "some posts out there"
 