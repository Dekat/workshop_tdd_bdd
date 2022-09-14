import {Game} from "../../src/domain/entities/game";
import {Given, When, Then} from "@cucumber/cucumber";
import assert from "assert";


Given('a tennis match with score "30 - 15"', function () {
  // TODO: Update this parser
  // TODO: Init data in context
  this.game = new Game();
});

When('first player scores', function () {
  // TODO: call something
});

Then('score should be "40 - 15"', function () {
  // TODO: Update this parser
  // TODO: assert something
  assert.equal(this.game.getScore(), "40 - 15");
});
