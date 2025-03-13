import type { GlobalCell } from "../models/GlobalCell";


export interface ticTacToe {
  board: { cells: string[] };
  players: string[];
  currentPlayer: boolean;
  gameStates: string[];
}

export interface ultimateTTT {
  board: { globalCells: GlobalCell[] };
  activeGlobalCell: null | number;
  players: string[];
  currentPlayer: boolean;
  gameStates: string[];
}

export interface AppState {
  ticTacToeWinStates: number[][];
  ticTacToe: ticTacToe;
  ultimateTTT: ultimateTTT;
}