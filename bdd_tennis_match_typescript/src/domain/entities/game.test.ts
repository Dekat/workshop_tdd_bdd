import {describe, expect, test} from '@jest/globals';
import {Game} from "./game";

describe('Game class tests', () => {
  test('Should return good score when with numbers', () => {
    // Given
    const game = new Game();

    // When
    const score = game.getScore();

    // Then
    // TODO: this test always fails... Upgrade it!
    expect(score).toBe("40 - 15");
  })
});
