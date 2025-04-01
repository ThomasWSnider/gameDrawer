import { Value } from "sass";
import { Appstate } from "../Appstate";

class UTTTService {

  fillCell(globalCellIndex: number, localCellIndex: number) {
    const board = Appstate.ultimateTTT.board
    const activeGlobalCell = Appstate.ultimateTTT.activeGlobalCell
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
    // if cell is empty and in correct global cell
    if (board.globalCells[globalCellIndex].localCells[localCellIndex] === '' && (activeGlobalCell === globalCellIndex || activeGlobalCell === null) && board.globalCells[globalCellIndex].value === '') {
      // set the value to the same value as the current player
      board.globalCells[globalCellIndex].localCells[localCellIndex] = playerSymbol;
      const localWinner = this.checkForLocalWinner(globalCellIndex);
      if (localWinner) {
        const globalWinner = this.checkForGlobalWinner();
        if (globalWinner && board.globalCells.every((globalCell) => globalCell.value !== "")) {
          return 3;
        }
        if (globalWinner) {
          return Appstate.ultimateTTT.currentPlayer ? 2 : 1;
        }
        else {
          this.setActiveGlobalCell(localCellIndex);
          this.switchPlayer();
          return 0
        }
      }
      this.setActiveGlobalCell(localCellIndex);
      this.switchPlayer();
    }
    return;
  }

  setActiveGlobalCell(index: number) {
    const board = Appstate.ultimateTTT.board;
    if (board.globalCells[index].value !== '') {
      Appstate.ultimateTTT.activeGlobalCell = null;
      return;
    }
    Appstate.ultimateTTT.activeGlobalCell = index;
    return;

  }

  switchPlayer() {
    Appstate.ultimateTTT.currentPlayer = !Appstate.ultimateTTT.currentPlayer;
  }

  checkForLocalWinner(globalCellIndex: number) {
    const globalCell = Appstate.ultimateTTT.board.globalCells[globalCellIndex];
    const winStates = Appstate.ticTacToeWinStates;
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
    for (const combination of winStates) {
      const [a, b, c] = combination;
      if (globalCell.localCells[a] === playerSymbol && globalCell.localCells[b] === playerSymbol && globalCell.localCells[c] === playerSymbol) {
        globalCell.value = `${playerSymbol}`;
        return true;
      }
      else if (!globalCell.localCells.includes('')) {
        globalCell.value = '½';
        return true;
      }
    }
    return false;
  }

  checkForGlobalWinner() {
    const winStates = Appstate.ticTacToeWinStates;
    const globalBoard = Appstate.ultimateTTT.board.globalCells;
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
    for (const combination of winStates) {
      const [a, b, c] = combination;
      if (globalBoard[a].value === playerSymbol && globalBoard[b].value === playerSymbol && globalBoard[c].value === playerSymbol) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}


export const uTTTService = new UTTTService;