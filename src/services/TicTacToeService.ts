import { Appstate } from "../Appstate";

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

  resetGame() {
    Appstate.ticTacToe.board = Array(9).fill("") as string[]
    Appstate.ticTacToe.currentPlayer = false
  }

  switchPlayer() {
    Appstate.ticTacToe.currentPlayer = !Appstate.ticTacToe.currentPlayer
  }
}

export const ticTacToeService = new TicTacToeService