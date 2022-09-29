import {GameRepository} from "../../domain/ports/game-repository";
import {Game} from "../../domain/entities/game";
import { injectable } from "inversify";


@injectable()
export class GamePostgreSqlRepository implements GameRepository {
    getGameById(gameId: number): Game {
        throw Error('You should not call me in these tests :(');
    }

    saveGame(game: Game): number {
        throw Error('You should not call me in these tests :(');
    }
}
