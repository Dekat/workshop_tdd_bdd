import {Game} from "../entities/game";

export interface GameRepository {
    getGameById(gameId: number): Game;
    saveGame(game: Game): number;
}
