import { Appstate } from "../Appstate";

class UTTTService {

  fillCell(globalCellIndex: number, localCellIndex: number) {
    const board = Appstate.ultimateTTT.board
    const activeGlobalCell = Appstate.ultimateTTT.activeGlobalCell
    // if cell is empty and in correct global cell
    if (board.globalCells[globalCellIndex].localCells[localCellIndex] === '' && (activeGlobalCell === globalCellIndex || activeGlobalCell === null)) {
      // set the value to the same value as the current player
      board.globalCells[globalCellIndex].localCells[localCellIndex] = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
      // set active global cell
      this.setActiveGlobalCell(localCellIndex);
      // switch the players
      this.switchPlayer();
    }
    return;
  }

  setActiveGlobalCell(index: number) {
    Appstate.ultimateTTT.activeGlobalCell = index;
  }

  switchPlayer() {
    Appstate.ultimateTTT.currentPlayer = !Appstate.ultimateTTT.currentPlayer;
    return;
  }
}

export const uTTTService = new UTTTService;