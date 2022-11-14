Feature: Feature 8

@user3 @web
Scenario: Crear, consultar, eliminar tag 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  When I enter the username "<EMAIL_USER1>"
  And I enter the password "<PASSWORD_USER1>"
  And I click on Sign in button
  And I wait for 5 seconds
  And I go to tag
  And I go to create new tag
  And I enter a new name "Mi Primer Tag" for tag
  And I click on newTag button
  And I wait for 5 seconds
  And I go to delete tag
  And I wait for 5 seconds
  Then I see not found the tag title "Mi Primer Tag"