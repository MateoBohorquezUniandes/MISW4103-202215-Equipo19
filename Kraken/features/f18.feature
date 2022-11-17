Feature: Crear opción de navegación

@user1 @web
Scenario: Crear 2 opción de nevagación, eliminar y consultar 
  
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 5 seconds
  When I enter the username "<EMAIL_USER1>"
      And I wait for 1 seconds
      And I enter the password "<PASSWORD_USER1>"
      And I wait for 5 seconds
      And I click on Sign in button
      And I wait for 5 seconds
      
      #2.- Creación de navegación
      And I click menu settings
      And I wait for 5 seconds
      And I click navigation option
      And I wait for 5 seconds
      And I enter primary navigation name "test1"
      And I wait for 1 seconds
      And I click save navigation
      And I wait for 5 seconds
      And I enter primary navigation name "test2"
      And I wait for 1 seconds
      And I click save navigation

      #3.- Sign out
      And I click user profile
      And I wait for 5 seconds
      And I click sign out
      And I wait for 5 seconds

      #4.- Sign in
      And I enter the username "<EMAIL_USER1>"
      And I wait for 1 seconds
      And I enter the password "<PASSWORD_USER1>"
      And I wait for 5 seconds
      And I click on Sign in button
      And I wait for 5 seconds

      #5.- View Site
      And I click menu view site
      And I wait for 5 seconds

      And I click menu settings
      And I wait for 5 seconds
      And I click navigation option
      And I wait for 5 seconds
      And I click delete last navigation option
      And I wait for 5 seconds
      And I click save navigation
      And I wait for 5 seconds

  Then I see the primary navigation "test1"
      And I wait for 5 seconds
      And I click user profile
      And I wait for 5 seconds
      And I click sign out
      And I wait for 5 seconds
