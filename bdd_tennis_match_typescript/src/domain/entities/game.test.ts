import {describe, expect, test} from '@jest/globals';
import {Game} from "./game";

describe('Game class tests', () => {
  test('Should start new games with a 0-0 score', () => {
    // Given
    const game = new Game(1);

    // Then
    expect(game.playerOneNumberOfPointsWon).toBe(0);
    expect(game.playerTwoNumberOfPointsWon).toBe(0);
  });
});
