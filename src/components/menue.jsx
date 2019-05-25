import React, { Component } from "react";
import InputSession from "./inputSession";
import JoinButton from "./joinButton";
import StartButton from "./startButton";

class Menu extends Component {
  state = {
    /*visable before game starts */
    visable: true
  };
  constructor() {
    super();
    this.handleStartButton = this.handleStartButton.bind(this);
  }
  menuClasses() {
    let classes = "menu ";
    if (!this.state.visable) classes += "animated fadeOut";
    return classes;
  }
  handleStartButton() {
    this.setState({ visable: false });
  }

  render() {
    return (
      <div className={this.menuClasses()}>
        <InputSession />
        <button className="start button" onClick={this.handleStartButton}>
          New Game
        </button>
      </div>
    );
  }
}

export default Menu;
