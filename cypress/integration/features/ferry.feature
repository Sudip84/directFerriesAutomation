Feature: Select Ferry destination and Buy ticket

    As a user 
    I want to select the ferry destination and select the ticket
    So that I can successfully select the destination and ticket


Scenario: Select Dover to Calais destination and select P&O ferry
    Given as user I am on Home Page
    When I select the travel location from "Dover"
    Then I should view "Dover" select from the dropdown
    When I select the travel destination to "Calais"
    Then I should view destination "Calais" select from the dropdown
    When I click on serach button
    Then I navigate to booking page
    When I select the P&O ferry


Scenario: Select Calais to Dover destination and select DFDS Seaways ferry
    Given as user I am on Home Page
    When I select the travel location from "Calais"
    Then I should view "Calais" select from the dropdown
    When I select the travel destination to "Dover"
    Then I should view destination "Dover" select from the dropdown
    When I click on serach button
    Then I navigate to booking page
    When I select the DFDS Seaways ferry