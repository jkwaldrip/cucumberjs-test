Feature: Truthiness

  Scenario: 1 and 1 is 2
    When I add 1 and 1
    Then the result is 2

  Scenario: 2 minus 2 is 0
    When I subtract 2 from 2
    Then the result is 0