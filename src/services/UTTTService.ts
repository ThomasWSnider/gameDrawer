import { Appstate } from "../Appstate";
import { GlobalCell } from "../models/GlobalCell";
import { UltimateTicTacToe } from "../models/UltimateTicTacToe";

class UTTTService {

  start(players: [string, string]) {
    const game = new UltimateTicTacToe(players, { globalCells: Array(9).fill(null).map(() => new GlobalCell) });
    Appstate.ultimateTTT = game;
    Appstate.currentGame = game;
  }

  fillCell(globalCellIndex: number, localCellIndex: number) {
    const board = Appstate.ultimateTTT.board;
    const localBoard = board.globalCells[globalCellIndex]
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
    // set the value to the same value as the current player
    localBoard.localCells[localCellIndex] = playerSymbol;
  }

  setActiveGlobalCell(index: number) {
    const board = Appstate.ultimateTTT.board;
    if (board.globalCells[index].value !== '') {
      Appstate.ultimateTTT.activeGlobalCell = null;
      return;
    }
    Appstate.ultimateTTT.activeGlobalCell = index;
  }

  switchPlayer() {
    Appstate.ultimateTTT.currentPlayer = !Appstate.ultimateTTT.currentPlayer;
  }

  checkForLocalWinner(globalCellIndex: number) {
    const globalCell = Appstate.ultimateTTT.board.globalCells[globalCellIndex];
    const winStates = Appstate.threeInARowWinStates;
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
    for (const combination of winStates) {
      const [a, b, c] = combination;
      if (globalCell.localCells[a] === playerSymbol && globalCell.localCells[b] === playerSymbol && globalCell.localCells[c] === playerSymbol) {
        globalCell.value = playerSymbol as "X" | "O";
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
    const winStates = Appstate.threeInARowWinStates;
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

  validateMove(currentGameState: number, globalCellIndex: number, localCellIndex: number) {
    const board = Appstate.ultimateTTT.board;
    const localBoard = board.globalCells[globalCellIndex];
    const activeGlobalCell = Appstate.ultimateTTT.activeGlobalCell;
    if (currentGameState !== 0) return false;
    if (activeGlobalCell !== null && activeGlobalCell !== globalCellIndex) return false;
    if (localBoard.value !== '') return false;
    if (localBoard.localCells[localCellIndex] !== '') return false;
    return true;
  }
}


export const uTTTService = new UTTTService;