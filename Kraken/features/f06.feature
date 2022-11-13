Feature: Filtrar posts creados

@user1 @web
Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 2
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<EMAIL_USER1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD_USER1>"
  And I wait for 5 seconds
  And I click next
  And I wait for 5 seconds
  And I click menu post
  And I wait for 5 seconds
  And I click option sort
  And I wait for 2 seconds
  And I click sort by oldest
  And I wait for 2 seconds
  And I click last post
  And I wait for 5 seconds
  And I get post title
  And I wait for 5 seconds
  And I click back page
  And I wait for 5 seconds
  And I click user profile
  And I wait for 5 seconds
  And I click sign out
  And I wait for 15 seconds