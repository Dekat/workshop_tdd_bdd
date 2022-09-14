import {GameRepository} from "../ports/game-repository";

export class IncrementPlayerScore {

    private gameRepository: GameRepository;

    constructor(gameRepository: GameRepository) {
        this.gameRepository = gameRepository;
    }

    public perform(isFirstPlayer: boolean, gameId: number): void {
        // TODO
    }
}
