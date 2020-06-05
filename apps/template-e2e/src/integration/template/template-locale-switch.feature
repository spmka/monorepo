Feature: Test locale switching

  Scenario: Switch to German
    Given I test the Template Form Page
    Given The button "German" is visible and enabled
    Given The button "German" is clicked
    Then The input field "Number" has the placeholder "Geben sie eine Zahl ein"
    And The input field "EMail" has the placeholder "Geben sie ihre email ein"

  Scenario: Switch to English
    Given I test the Template Form Page
    Given The button "English" is visible and enabled
    Given The button "English" is clicked
    Then The input field "Number" has the placeholder "Enter a number"
    And The input field "EMail" has the placeholder "Enter your email"
