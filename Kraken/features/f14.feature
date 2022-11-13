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
  And I click menu members
  And I wait for 5 seconds
  And I click new member
  And I wait for 5 seconds
  And I enter member name "Test"
  And I wait for 1 seconds
  And I enter member email "test@test.com"
  And I wait for 5 seconds
  And I click save member
  And I wait for 5 seconds
  And I click menu members
  And I wait for 5 seconds
  And I click user profile
  And I wait for 5 seconds
  And I click sign out
  And I wait for 15 seconds