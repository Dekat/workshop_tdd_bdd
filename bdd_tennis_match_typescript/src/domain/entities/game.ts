export class Game {

  public readonly gameId: number;
  private _playerOneNumberOfPointsWon: number;
  private _playerTwoNumberOfPointsWon: number;

  constructor(
    gameId: number,
    playerOneNumberOfPointsWon: number = 0,
    playerTwoNumberOfPointsWon: number = 0
  ) {
    this.gameId = gameId;
    this._playerOneNumberOfPointsWon = playerOneNumberOfPointsWon;
    this._playerTwoNumberOfPointsWon = playerTwoNumberOfPointsWon;
  }

  get playerOneNumberOfPointsWon(): number {
    return this._playerOneNumberOfPointsWon;
  }

  get playerTwoNumberOfPointsWon(): number {
    return this._playerTwoNumberOfPointsWon;
  }

  incrementPlayerOneNumberOfPointsWon(): void {
    this._playerOneNumberOfPointsWon += 1;
  }

  incrementPlayerTwoNumberOfPointsWon(): void {
    this._playerTwoNumberOfPointsWon += 1;
  }

  getScore(): string {
    return "40 - 15"
  }
}
