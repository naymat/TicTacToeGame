const Board = require("./Board");
const Player = require("./Player");

class Game {
  constructor() {
    this.players = [];
    this.board = new Board();
  }
  addPlayer(player) {
    this.players.push(player);
  }
  getPlayers() {
    return this.players;
  }
  assignTurn(player) {
    this.currentTurn = player;
  }
  //Get current player who's turn it is
  getTurn() {
    return this.currentTurn;
  }
  isPlayersTurn(player) {
    if (player == this.getTurn()) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Chooses which player gets to go first
   */
  randomPlayerFirst() {
    const rand = Math.floor(Math.random() * (this.players.length - 1) + 0);
    this.currentTurn = players[rand];
  }
  /**
   * Chooses next person
   */
  nextTurn() {
    let curr = this.currentTurn;
    let index = this.players.findIndex(player => {
      if (player === curr) {
        return player;
      }
    });

    //if this is the last player in array, then we set next turn to first element in player
    if (index === this.players.length - 1) {
      this.assignTurn(this.players[0]);
    } else if (index < this.players.length - 1) {
      this.assignTurn(this.players[index + 1]);
    } else {
      return Error;
    }
  }

  markCellByCoordinate(p1, coordinate) {
    return this.markCell(p1, coordinate.x, coordinate.y);
  }
  markCell(p1, x, y) {
    debugger;
    //we can mark the cell if it is empty and it is the players turn
    if (this.board.isEmptyCell(x, y) && this.isPlayersTurn(p1)) {
      this.board.updateBoard(x, y, p1.mark);
      this.nextTurn();
      return true;
    } else return false;
  }
}
module.exports = Game;
