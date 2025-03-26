import { Appstate } from "../Appstate";

class UTTTService {

  fillCell(globalCellIndex: number, localCellIndex: number) {
    const board = Appstate.ultimateTTT.board
    const activeGlobalCell = Appstate.ultimateTTT.activeGlobalCell
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)];
    // if cell is empty and in correct global cell
    if (board.globalCells[globalCellIndex].localCells[localCellIndex] === '' && (activeGlobalCell === globalCellIndex || activeGlobalCell === null)) {
      console.log(`local cell ${localCellIndex} is not occupied and global cell ${globalCellIndex} is a valid global cell`)
      // set the value to the same value as the current player
      board.globalCells[globalCellIndex].localCells[localCellIndex] = playerSymbol;
      console.log(`cell ${localCellIndex} in global cell ${globalCellIndex} now has the value of ${playerSymbol}`)
      const localCellWinner = this.checkForLocalWinner(globalCellIndex);
      if (localCellWinner) {
        board.globalCells[globalCellIndex].value = playerSymbol;
      }
      // set active global cell
      this.setActiveGlobalCell(localCellIndex);
      // switch the players
      this.switchPlayer();
    }
    return;
  }

  setActiveGlobalCell(index: number) {
    const board = Appstate.ultimateTTT.board;
    const activeGlobalCell = Appstate.ultimateTTT.activeGlobalCell;
    if (board.globalCells[index].value !== '') {
      console.log(`global cell ${index} is already claimed, free play`)
      Appstate.ultimateTTT.activeGlobalCell = null;
      console.log(Appstate.ultimateTTT.activeGlobalCell)
      return;
    }
    Appstate.ultimateTTT.activeGlobalCell = index;
    console.log(`global cell ${index} is now the active global cell`)
    return;

  }

  switchPlayer() {
    Appstate.ultimateTTT.currentPlayer = !Appstate.ultimateTTT.currentPlayer;
    return;
  }

  checkForLocalWinner(globalCellIndex: number) {
    const globalCell = Appstate.ultimateTTT.board.globalCells[globalCellIndex];
    const winStates = Appstate.ticTacToeWinStates;
    const playerSymbol = Appstate.ultimateTTT.players[Number(Appstate.ultimateTTT.currentPlayer)]
    for (const combination of winStates) {
      const [a, b, c] = combination;
      if (globalCell.localCells[a] === playerSymbol && globalCell.localCells[b] === playerSymbol && globalCell.localCells[c] === playerSymbol) {
        globalCell.value = `${playerSymbol}`;
        console.log(`${playerSymbol} has won global cell ${globalCellIndex}`)
        return true;
      }
      else if (!globalCell.localCells.includes('')) {
        globalCell.value = '-';
        console.log(`global cell ${globalCellIndex} is a drawn board`)
        return true;
      }
    }
    console.log(`global cell ${globalCellIndex} is still in play`)
    return false;
  }
}


export const uTTTService = new UTTTService;