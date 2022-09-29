import {GameController} from "./domain/ports/game-controller";

// For InversifyJS (inversion of control library)

const TYPES = {
  GameController: Symbol.for("GameController"),
  GameRepository: Symbol.for("GameRepository"),
  GetScore: Symbol.for("GetScore"),
  IncrementPlayerScore: Symbol.for("IncrementPlayerScore"),
}

export { TYPES };
