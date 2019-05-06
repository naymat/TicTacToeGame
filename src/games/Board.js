class Board {
  constructor() {
    this.boardLength = 3;
    this.boardWidth = 3;
    this.boardArray = [];
    this.createBoard();
  }
  /**Creates n*m board based on the boardWidth and boardLength properties */
  createBoard() {
    const row = [];
    for (var x = 0; x < this.boardWidth; x++) {
      row.push("");
    }
    for (var x = 0; x < this.boardLength; x++) {
      this.boardArray.push(row);
    }
  }
  /*Update Board with new mark*/
  updateBoard(x, y, mark) {
    if (this.isUnchanged(x, y)) {
      this.boardArray[x][y] = mark;
    }
  }
  isUnchanged(x, y) {
    if (this.getCell(x, y) === "") return true;
    else return false;
  }
  getCell(x, y) {
    return this.boardArray[x][y];
  }
}

module.exports = Board;
