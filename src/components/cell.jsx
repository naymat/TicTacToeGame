import React, { Component } from "react";
class Cell extends Component {
  state = {
    mark: "",
    player: "O"
  };

  constructor() {
    super();
    this.cellSelected = this.cellSelected.bind(this);
  }

  cellSelected() {
    this.setState({ mark: this.state.player });
  }
  render() {
    return (
      <div onClick={this.cellSelected} className="cell">
        {this.state.mark}
      </div>
    );
  }
}

export default Cell;
