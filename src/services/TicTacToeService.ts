import { Appstate } from "../Appstate";

class TicTacToeService {

  checkForWinner(playerSymbol: string) {
    const winStates = Appstate.ticTacToeWinStates;
    const gameBoard = Appstate.ticTacToe.board.cells;
    for (const combination of winStates) {
      const [a, b, c] = combination;
      if (gameBoard[a] === playerSymbol && gameBoard[b] === playerSymbol && gameBoard[c] === playerSymbol) return true;
    }
    return false;
  }

  fillCell(cellIndex: number, playerSymbol: string) {
    const gameBoard = Appstate.ticTacToe.board
    if (gameBoard.cells[cellIndex] === "") {
      gameBoard.cells[cellIndex] = playerSymbol;
      const winnerIs = this.checkForWinner(playerSymbol)
      return winnerIs
    }
  }

  resetGame() {
    Appstate.ticTacToe.board.cells = Array(9).fill("") as string[]
    Appstate.ticTacToe.currentPlayer = false
  }

  switchPlayer() {
    Appstate.ticTacToe.currentPlayer = !Appstate.ticTacToe.currentPlayer
  }
}

export const ticTacToeService = new TicTacToeService