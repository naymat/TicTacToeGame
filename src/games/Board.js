class Board {
  constructor() {
    this.boardLength = 3;
    this.boardWidth = 3;
    this.boardArray = [];
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
  updateBoard(coordinate, mark) {
    if (isUnchanged(position)) {
      console.log("position is unchanged");
    }
  }
  isUnchanged(coordinate) {
    if (this.boardArray[coordinate.x][coordinate.y] === "") return true;
    else return false;
  }
}
module.exports = Board;
