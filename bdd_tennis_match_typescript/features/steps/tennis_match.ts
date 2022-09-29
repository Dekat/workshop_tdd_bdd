import {Game} from "../../src/domain/entities/game";
import {Given, When, Then} from "@cucumber/cucumber";
import assert from "assert";
import {IncrementPlayerScore} from "../../src/domain/use-cases/increment-player-score";
import {TYPES} from "../../src/types";
import {registry} from "../../src/inversify.config";
import {UiController} from "../../src/infrastructure/controllers/ui-controller";
import {GameRepository} from "../../src/domain/ports/game-repository";

Given('a tennis match with score "30 - 15"', function () {
  this.gameId = 1;
  this.uiController = new UiController();
  registry.get<GameRepository>(TYPES.GameRepository).saveGame(
    new Game(this.gameId, 2, 1)
  );
});

When('referee clicks on button to increment first player score', function () {
  this.uiController.incrementFirstPlayerScore();
});

Then('score should be "40 - 15"', function () {
  const currentScore = this.uiController.getScore();
  assert.equal(currentScore, "40 - 15");
});
