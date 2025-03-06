import { reactive } from "vue";

export const Appstate = reactive({
  ticTacToe: {
    board: { cells: Array(9).fill("") as string[] },
    winStates: [
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
    ],
    players: ["X", "O"],
    gameStates: [`inProgress`, `X Wins!`, `O Wins!`, `It's a Draw!`]
  }
})