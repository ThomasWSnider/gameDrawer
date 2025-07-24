import { uTTTService } from "./UTTTService";

class GameService {
  startUltimateTTT(players: [string, string]) {
    uTTTService.start(players);
  }
}

export const gameService = new GameService;