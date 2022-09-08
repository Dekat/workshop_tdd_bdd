# Subject - The tennis game

You’ll need to implement a simple tennis game.

Score rules are:
- Each player can have this scores (from lower to higher): 0, 15, 30 and 40
- If a player has 40 and win the point, he wins the game
- If the two players have 40, the score is `deuce`
- If the score is deuce, the player who scored take the advantage: 
`advantage for player X`
- If the player who has the advantage win the point, he wins the game:
`player X win the game`
- If the player who hasn’t the advantage win the point, we come back to a deuce score

You’ll need to implement these two functions:
- Indicate that a player scores
- Return the current score

# Used libraries

We use [pytest](https://pypi.org/project/pytest/) for the unit tests and 
[behave](https://pypi.org/project/behave/) for the behavior tests.

# Requirements

Having Docker and Docker-compose installed!

# Usage

You can run unit tests with `make run-unit`.

You can run behavior tests with `make run-behavior`.
