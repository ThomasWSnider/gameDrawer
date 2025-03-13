
export function setUpUTTTBoard(): { localCells: string[], value: '' | 'X' | 'O' | '-' } {
  return {
    localCells: Array(9).fill(""),
    value: ""
  }
}
