Feature: My feature

@user1 @web
Scenario: Como primer usuario inicio sesión
  Given I navigate to page "http://www.google.com"
  And I wait for 5 seconds
  When I enter text to search 'Uniandes'
  And I click on search button
  And I wait for 5 seconds

@user2 @web
Scenario: Como segundo usuario inicio sesión
  Given I navigate to page "http://www.google.com"