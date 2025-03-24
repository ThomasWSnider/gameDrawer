import { Appstate } from "../Appstate"

class UTTTService {

  fillCell(globalCellIndex: number, localCellIndex: number) {
    Appstate.ultimateTTT.board.globalCells[globalCellIndex].localCells[localCellIndex] = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)]
    return
  }

  setGlobalCell(index: number) {
    Appstate.ultimateTTT.activeGlobalCell = index;
  }
}

export const uTTTService = new UTTTService