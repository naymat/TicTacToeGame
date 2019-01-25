import React, { Component } from "react";
import Cell from "../components/row";
import Row from "../components/row";

class Board extends Component {
  state = { visable: false };
  boardClasses() {
    let classes = "board noselect ";
    if (!this.state.visable) classes += "hide";

    return classes;
  }
  render() {
    return (
      <div className={this.boardClasses()}>
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default Board;
