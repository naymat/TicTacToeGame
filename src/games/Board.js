class Board {
  constructor() {
    this.boardLength = 3;
    this.boardWidth = 3;
    this.boardArray = [];
    this.createBoard();
  }
  /**Creates n*m board based on the boardWidth and boardLength properties */
  createBoard() {
    for (var x = 0; x < this.boardLength; x++) {
      let row = [];
      for (var y = 0; y < this.boardWidth; y++) {
        row.push("");
      }
      this.boardArray.push(row);
    }
  }
  updateBoard(coordinate, mark) {
    this.updateBoard(coordinate.x, coordinate.y, mark);
  }
  /*Update Board with new mark
  UpdateBoard(x,y) => {x = 0, y = 2} (updated value indicated by U)
  ---------
  | x     |
  | U x o |
  |       |
  ---------
  */
  updateBoard(x, y, mark) {
    if (this.isEmptyCell(y, x)) {
      this.boardArray[y][x] = mark;
    }
  }
  isEmptyCell(x, y) {
    if (this.getCell(x, y) === "") return true;
    else return false;
  }
  getCell(x, y) {
    //[y][x] instead of [x][y] because we want x to be horizintal value and y to be veritical in logical representation
    return this.boardArray[y][x];
  }
}

export default Board;
