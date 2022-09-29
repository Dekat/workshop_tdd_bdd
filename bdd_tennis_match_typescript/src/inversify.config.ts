import { Container } from "inversify";
import {GameRepository} from "./domain/ports/game-repository";
import {TYPES} from "./types";
import {GetScore} from "./domain/use-cases/get-score";
import {
  GamePostgreSqlRepository
} from "./infrastructure/adapters/game-postgre-sql-repository";
import {IncrementPlayerScore} from "./domain/use-cases/increment-player-score";

const registry = new Container();
registry.bind<GameRepository>(TYPES.GameRepository).to(GamePostgreSqlRepository)
registry.bind<GetScore>(TYPES.GetScore).to(GetScore)
registry.bind<IncrementPlayerScore>(TYPES.IncrementPlayerScore).to(IncrementPlayerScore)

export {registry};
