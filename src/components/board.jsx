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
    board.updateBoard(0, 0, "N");
    console.log(board.boardArray);
    return (
      <div className={this.boardClasses()}>
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default GameBoard;
