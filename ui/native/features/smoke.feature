Feature: Sample App

    Scenario: Test application login
        Given I open the app
        When I put username and password
            And I click on login button
        Then  I am navigated to the products screen