import React, { Component } from "react";
import Cell from "../components/cell";

class Row extends Component {
  state = {
    rowNumber: 0
  };
  render() {
    return (
      <div className="row">
        <Cell />
        <Cell />
        <Cell />
      </div>
    );
  }
}

export default Row;
