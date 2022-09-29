Feature: Tennis match

  Scenario: A player scores
    Given a tennis match with score "30 - 15"
    When referee clicks on button to increment first player score
    Then score should be "40 - 15"
