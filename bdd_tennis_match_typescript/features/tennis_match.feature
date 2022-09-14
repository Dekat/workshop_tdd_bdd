Feature: Tennis match

  Scenario: A player score
    Given a tennis match with score "30 - 15"
    When first player scores
    Then score should be "40 - 15"
