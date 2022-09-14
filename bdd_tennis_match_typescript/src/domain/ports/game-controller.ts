export interface GameController {
    getScore(): string;
    incrementFirstPlayerScore(): void;
    incrementSecondPlayerScore(): void;
}
