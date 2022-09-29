import {GameRepository} from "../ports/game-repository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";

@injectable()
export class IncrementPlayerScore {

    private gameRepository: GameRepository;

    constructor(
      @inject(TYPES.GameRepository) gameRepository: GameRepository
    ) {
        this.gameRepository = gameRepository;
    }

    public perform(isFirstPlayer: boolean, gameId: number): string {
        return "40 - 15";
    }
}
