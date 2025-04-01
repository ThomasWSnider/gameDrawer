import { TwoPlayerGame } from "./TwoPlayerGame";

export class TicTacToe extends TwoPlayerGame<string[]> {

  constructor(players: [string, string], board: string[]) {
    super(players, board)
  }
  // initializeBoard(): string[] {
  //   return Array(9).fill("");
  // }
  // resetGame(): void {
  //   this.board = this.initializeBoard();
  //   this.currentPlayer = false;
  // }
}