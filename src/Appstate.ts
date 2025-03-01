import { reactive } from "vue";

export const Appstate = reactive({
  ticTacToeWinStates: [
    // Horizontal winstates
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical winstates
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    // Diagonal winstates
    [0, 4, 8],
    [2, 4, 6]
  ]
})