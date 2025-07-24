import { ticTacToeService } from "./TicTacToeService";
import { uTTTService } from "./UTTTService";

class GameService {
  startUltimateTTT(players: [string, string]) {
    uTTTService.start(players);
  }

  startTicTacToe(players: [string, string]) {
    ticTacToeService.start(players)
  }
}

export const gameService = new GameService;