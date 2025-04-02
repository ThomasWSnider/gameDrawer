import { TwoPlayerGame } from "./TwoPlayerGame";

export class TicTacToe extends TwoPlayerGame<string[]> {

  constructor(players: [string, string], board: string[]) {
    super(players, board)
  }

}