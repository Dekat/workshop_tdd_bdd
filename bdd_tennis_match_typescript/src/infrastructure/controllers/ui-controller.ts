import {GameController} from "../../domain/ports/game-controller";
import {registry} from "../../inversify.config";
import {IncrementPlayerScore} from "../../domain/use-cases/increment-player-score";
import {TYPES} from "../../types";
import {GetScore} from "../../domain/use-cases/get-score";

export class UiController implements GameController {
    private readonly gameId: number;

    constructor(gameId: number = 1) {
        this.gameId = gameId;
    }

    getScore(): string {
        return registry.get<GetScore>(TYPES.GetScore).perform(this.gameId);
    }

    incrementFirstPlayerScore(): void {
        registry.get<IncrementPlayerScore>(TYPES.IncrementPlayerScore).perform(
          true, this.gameId
        );
    }

    incrementSecondPlayerScore(): void {
        registry.get<IncrementPlayerScore>(TYPES.IncrementPlayerScore).perform(
          false, this.gameId
        );
    }
}
