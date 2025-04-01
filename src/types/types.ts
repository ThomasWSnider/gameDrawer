import type { GlobalCell } from "../models/GlobalCell";

export interface ITwoPlayerGame<T> {
  board: T;
  players: [string, string];
  currentPlayer: boolean;
  gameStates: string[];
}

export interface ticTacToe extends ITwoPlayerGame<string[]> { }

export interface ultimateTTT extends ITwoPlayerGame<{ globalCells: GlobalCell[] }> {
  activeGlobalCell: null | number;
}

export interface AppState {
  threeInARowWinStates: number[][];
  ticTacToe: ticTacToe;
  ultimateTTT: ultimateTTT;
  currentGame: ticTacToe | ultimateTTT | null;
}
