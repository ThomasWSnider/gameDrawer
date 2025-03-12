import { reactive } from "vue";
import { setUpUTTTBoard } from "./utils/boardUtils";

export const Appstate = reactive({
  ticTacToeWinStates: [
    // Horizontal winstates
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical winstates
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal winstates
    [0, 4, 8],
    [2, 4, 6]
  ],
  ticTacToe: {
    board: { cells: Array(9).fill("") as string[] },
    players: ["X", "O"],
    currentPlayer: false,
    gameStates: [`inProgress`, `X Wins!`, `O Wins!`, `It's a Draw!`]
  },
  ultimateTTT: {
    board: { globalCells: Array(9).fill(setUpUTTTBoard()) },
    activeGlobalCell: null,
    players: ["X", "O"],
    currentPlayer: false,
    gameStates: [`notBegun`, `X Wins!`, `O Wins!`, `It's a Draw!`]
  }
})