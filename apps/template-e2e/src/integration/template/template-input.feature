Feature: Test input form

  Scenario: Test number input
    Given I test the Template Form Page
    Given The input field "Number" is visible and empty
    Given I type the value "12345" into the "Number" input field
    Then The input field "Number" should contain the text "12345"

  Scenario: Test email input
    Given I test the Template Form Page
    Given The input field "EMail" is visible and empty
    # short form for typing and testing (see above)
    Given The input field "EMail" is filled with the text "test@test.com"

  Scenario: Test number and email input
    Given I test the Template Form Page
    Given The input field "Number" is visible and empty
    Given The input field "EMail" is visible and empty
    Given The input field "Number" is filled with the text "12345"
    Given The input field "EMail" is filled with the text "test@test.com"
