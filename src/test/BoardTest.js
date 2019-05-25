const Board = require("../src/games/Board").default;
const assert = require("chai").assert;

describe("Board", function() {
  let board;
  it("Create Empty Board", function() {
    board = new Board();

    assert(board.boardLength === 3);
    assert(true);
  });
  // beforeEach(() => {
  //   board = new Board();
  // });
  it("Insert a value into board", function() {
    //Insert into (0,0) position
    board = new Board();
    //Adds an X to the first row and first column of the board
    debugger;
    board.updateBoard(0, 0, "X");

    const expectedBoard = [["X", "", ""], ["", "", ""], ["", "", ""]];
    assert.equal(board.boardArray, expectedBoard);
  });
  it("Get a empty cell from the board", function() {
    board = new Board();
    assert.equal(board.getCell(0, 0), "");
  });
  it("Get non empty cell from board", function() {
    board = new Board();
    board.boardArray = [["", "X", ""], ["O", "X", ""], ["X", "", "O"]];
    assert.equal(board.getCell(0, 1), "X");
  });
});
