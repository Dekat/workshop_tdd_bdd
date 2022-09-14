import {GameController} from "../../domain/ports/game-controller";
import {incrementPlayerScoreUseCase} from "../../registry";

export class UiController implements GameController {
    private readonly gameId: number;

    constructor(gameId: number = 1) {
        this.gameId = gameId;
    }

    getScore(): string {
        // TODO
        return "";
    }

    incrementFirstPlayerScore(): void {
        incrementPlayerScoreUseCase.perform(true, this.gameId);
    }

    incrementSecondPlayerScore(): void {
        incrementPlayerScoreUseCase.perform(false, this.gameId);
    }
}
