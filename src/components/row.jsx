import React, { Component } from "react";
import Cell from "../components/cell";

class Row extends Component {
  state = {
    rowNumber: 0
  };
  render() {
    return (
      <div className="row">
        {this.props.row.map(value => {
          return <Cell value={value} />;
        })}
      </div>
    );
  }
}

export default Row;
