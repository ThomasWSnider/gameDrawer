
export function setUpUTTTBoard(): { localCells: string[], filled: boolean, victor: '' | 'X' | 'O' | '-' } {
  return {
    localCells: Array(9).fill(""),
    filled: false,
    victor: ''
  }
}
