import React, { Component } from "react";
import Cell from "../components/row";
import Row from "../components/row";

class GameBoard extends Component {
  state = { visable: true };
  boardClasses() {
    let classes = "board noselect ";
    if (!this.state.visable) classes += "hide";

    return classes;
  }
  render() {
    const board = this.props.board;
    board.updateBoard(0, 2, "X");
    console.log(board.boardArray);
    return (
      <div className={this.boardClasses()}>
        {board.boardArray.map(row => (
          <Row row={row} />
        ))}
      </div>
    );
  }
}

export default GameBoard;
