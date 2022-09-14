import {IncrementPlayerScore} from "./domain/use_cases/increment-player-score";
import {
  GameInMemoryRepository
} from "./infrastructure/adapters/game-in-memory-repository";


const gameRepository = new GameInMemoryRepository();


export const incrementPlayerScoreUseCase = new IncrementPlayerScore(gameRepository);
