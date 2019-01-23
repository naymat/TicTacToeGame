import React, { Component } from "react";
class StartButton extends Component {
  state = {
    text: "Start"
  };

  changeText() {
    console.log("something was clicked");
  }

  render() {
    return (
      <button className="start button" onClick={this.changeText}>
        {this.state.text}
      </button>
    );
  }
}

export default StartButton;
