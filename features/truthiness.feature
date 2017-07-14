Feature: Truthiness

  Scenario: True Things are True
    When I say "true"
    Then it is truthy

  Scenario: False Things are False
    When I say "false"
    Then it is falsey