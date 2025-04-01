import type { ITwoPlayerGame } from "../types/types";

export abstract class TwoPlayerGame<T> implements ITwoPlayerGame<T> {
  board: T;
  players: [string, string];
  currentPlayer: boolean;
  gameStates: string[];

  constructor(players: [string, string], board: T) {
    this.players = players;
    this.currentPlayer = false;
    this.gameStates = [`inProgress`, `${players[0]} Wins!`, `${players[1]} Wins!`];
    this.board = board
  }
}