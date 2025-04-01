import { reactive } from "vue";
import { GlobalCell } from "./models/GlobalCell";
import type { AppState } from "./types/types";
import { TicTacToe } from "./models/TicTacToe";
import { UltimateTicTacToe } from "./models/UltimateTicTacToe";

export const Appstate = reactive<AppState>({
  threeInARowWinStates: [
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
  ticTacToe: new TicTacToe(["X", "O"], Array(9).fill("")),
  ultimateTTT: new UltimateTicTacToe(["X", "O"], { globalCells: Array(9).fill(null).map(() => new GlobalCell) }),
  currentGame: null,
})