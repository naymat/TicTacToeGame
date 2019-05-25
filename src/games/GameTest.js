const Board = require("./Board");
//const Coordinate = require("./Coordinate");
let testBoard = new Board();
testBoard.createBoard();

function Coordinate(x, y) {
  this.x = x;
  this.y = y;
}

let X = new Coordinate(1, 4);
console.log(X.y);
