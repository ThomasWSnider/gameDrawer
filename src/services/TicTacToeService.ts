import { Appstate } from "../Appstate";
import { TicTacToe } from "../models/TicTacToe";

class TicTacToeService {

  checkForWinner(playerSymbol: string) {
    const winStates = Appstate.threeInARowWinStates;
    const gameBoard = Appstate.ticTacToe.board;
    for (const combination of winStates) {
      const [a, b, c] = combination;
      if (gameBoard[a] === playerSymbol && gameBoard[b] === playerSymbol && gameBoard[c] === playerSymbol) return true;
    }
    return false;
  }

  fillCell(cellIndex: number, playerSymbol: string) {
    const gameBoard = Appstate.ticTacToe.board
    if (gameBoard[cellIndex] === "") {
      gameBoard[cellIndex] = playerSymbol;
      const winnerIs = this.checkForWinner(playerSymbol)
      return winnerIs
    }
  }

  start(players: [string, string]) {
    // Appstate.ticTacToe.board = Array(9).fill("") as string[]
    // Appstate.ticTacToe.currentPlayer = false
    const game = new TicTacToe(players, Array(9).fill(""));
    Appstate.ticTacToe = game;
    Appstate.currentGame = game;
  }

  switchPlayer() {
    Appstate.ticTacToe.currentPlayer = !Appstate.ticTacToe.currentPlayer
  }
}

export const ticTacToeService = new TicTacToeService