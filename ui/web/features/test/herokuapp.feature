Feature: To test all common functions

    Background:
        Given I am on the herokuapp page

    Scenario: Test enter text function
        When I click on the input link
            And I enter the number in the inputfield

    Scenario: Test key press function
        When I click on the key press link
            And I press button enter

    Scenario: Test selection of dropdown value by text function
        When I click on dropdown link
            And I select the dropdown value by text

    Scenario: Test selection of dropdown value by index function
        When I click on dropdown link
            And I select the dropdown value by index

    Scenario: Test selection of dropdown value by attribute function
        When I click on dropdown link
            And I select the dropdown value by attribute

    Scenario: Test switchToWindow function paasing window number
        When I click on multiple windows link
            And I click on click here link
            And I switch to another window
        Then I close last opened window

    Scenario: Test switchToWindow function paasing window name
        When I click on multiple windows link
            And I click on click here link
            And I switch to another tab
        Then I close last opened window

    Scenario: Test drag and drop function
        When I click on drag and drop link
            And I drag column A to Column B

    Scenario: Test get Element Text and checkEqualText
        When I click on multiple windows link
        Then Verify get element Text

    Scenario: Test Is Element Displayed, is element exist and is element enabled
        When I click on the Add remove element link
        Then Verify that element is displayed, enabled and existing

    Scenario: Test check Title Contains
        When I click on multiple windows link
            And I click on click here link
            And I switch to another tab
        Then Verify that Title contains text
            And I close last opened window

    Scenario: Test check Text Contains
        When I click on multiple windows link
            And I click on click here link
            And I switch to another tab
        Then Verify that check Text contains
            And I close last opened window

    Scenario: Test closeLastOpenedWindow function paasing window name
        When I click on multiple windows link
            And I click on click here link
        Then I close last opened window

