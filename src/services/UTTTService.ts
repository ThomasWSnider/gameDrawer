import { Appstate } from "../Appstate";

class UTTTService {

  fillCell(globalCellIndex: number, localCellIndex: number) {
    const board = Appstate.ultimateTTT.board
    const activeGlobalCell = Appstate.ultimateTTT.activeGlobalCell
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
    // if cell is empty and in correct global cell
    if (board.globalCells[globalCellIndex].localCells[localCellIndex] === '' && (activeGlobalCell === globalCellIndex || activeGlobalCell === null)) {
      // set the value to the same value as the current player
      board.globalCells[globalCellIndex].localCells[localCellIndex] = playerSymbol;
      const localCellWinner = this.checkForLocalWinner(globalCellIndex)
      if (localCellWinner) {
        board.globalCells[globalCellIndex].value = playerSymbol
      }
      // set active global cell
      this.setActiveGlobalCell(localCellIndex);
      // switch the players
      this.switchPlayer();
    }
    return;
  }

  setActiveGlobalCell(index: number) {
    const board = Appstate.ultimateTTT.board;
    const activeGlobalCell = Appstate.ultimateTTT.activeGlobalCell;
    if (activeGlobalCell === null || board.globalCells[activeGlobalCell].value !== '') {
      Appstate.ultimateTTT.activeGlobalCell = null;
    }
    Appstate.ultimateTTT.activeGlobalCell = index;
  }

  switchPlayer() {
    Appstate.ultimateTTT.currentPlayer = !Appstate.ultimateTTT.currentPlayer;
    return;
  }

  checkForLocalWinner(globalCellIndex: number) {
    const globalCell = Appstate.ultimateTTT.board.globalCells[globalCellIndex];
    const winStates = Appstate.ticTacToeWinStates;
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)]
    for (const combination of winStates) {
      const [a, b, c] = combination;
      if (globalCell.localCells[a] === playerSymbol && globalCell.localCells[b] === playerSymbol && globalCell.localCells[c] === playerSymbol) {
        globalCell.value = `${playerSymbol}`;
        return true;
      }
      else if (!globalCell.localCells.includes('')) {
        globalCell.value = '-';
        return true;
      }
    }
    return false;
  }
}


export const uTTTService = new UTTTService;