import {GameRepository} from "../ports/game-repository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";

@injectable()
export class GetScore {

    private gameRepository: GameRepository;

    constructor(
      @inject(TYPES.GameRepository) gameRepository: GameRepository
    ) {
        this.gameRepository = gameRepository;
    }

    public perform(gameId: number): string {
        return "40 - 15";
    }
}
