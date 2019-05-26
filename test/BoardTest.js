const Board = require("../src/games/Board").default;
const assert = require("chai").assert;

describe("Board", function() {
  let board;
  it("Create Empty Board", function() {
    board = new Board();

    assert(board.boardLength === 3);
    assert.deepEqual(board.boardArray, [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  });
  // beforeEach(() => {
  //   board = new Board();
  // });
  it("Insert a value into board", function() {
    //Insert into (0,0) position
    board = new Board();
    //Adds an X to the first row and first column of the board

    // board.updateBoard(0, 0, "X");
    board.boardArray[0][0] = "X";
    const expectedBoard = [["X", "", ""], ["", "", ""], ["", "", ""]];
    assert.deepEqual(board.boardArray, expectedBoard);
  });
  it("Get a empty cell from the board", function() {
    board = new Board();
    assert.equal(board.getCell(0, 0), "");
  });
  it("Get non empty cell from board", function() {
    board = new Board();
    const boardArr = (board.boardArray = [
      ["", "X", ""],
      ["O", "X", ""],
      ["X", "", "O"]
    ]);
    assert.equal(board.getCell(0, 1), "O");
  });
  it("Get origin", function() {
    board = new Board();
    const boardArr = (board.boardArray = [
      ["", "X", ""],
      ["O", "X", ""],
      ["X", "", "O"]
    ]);
    assert.equal(board.getCell(0, 0), "");
  });
  it("Get x:1 , y :0", function() {
    board = new Board();
    debugger;
    const boardArr = (board.boardArray = [
      ["", "X", ""],
      ["O", "X", ""],
      ["X", "", "O"]
    ]);
    assert.equal(board.getCell(1, 0), "X");
  });
  it("Get middle point", function() {
    board = new Board();
    const boardArr = (board.boardArray = [
      ["", "X", ""],
      ["O", "X", ""],
      ["X", "", "O"]
    ]);
    assert.equal(board.getCell(1, 1), "X");
  });
});
