import {GameRepository} from "../../domain/ports/game-repository";
import {Game} from "../../domain/entities/game";

export class GameInMemoryRepository implements GameRepository {
    getGameById(gameId: number): Game {
        // TODO
        return new Game();
    }

    saveGame(game: Game): number {
        // TODO
        return 0;
    }
}
