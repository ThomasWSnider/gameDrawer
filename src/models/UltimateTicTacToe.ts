import type { GlobalCell } from "./GlobalCell";
import { TwoPlayerGame } from "./TwoPlayerGame";

export class UltimateTicTacToe extends TwoPlayerGame<{ globalCells: GlobalCell[] }> {
  activeGlobalCell: null | number;
  constructor(players: [string, string], board: { globalCells: GlobalCell[] }) {
    super(players, board)
    this.activeGlobalCell = null;
  }
}