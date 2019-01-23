import React, { Component } from "react";
import InputSession from "./inputSession";
import JoinButton from "./joinButton";
import StartButton from "./startButton";

class Menu extends Component {
  state = {
    /*visable before game starts */
    visable: true
  };
  menuClasses() {
    let classes = "menu ";
    if (!this.state.visable) classes += "hide";

    return classes;
  }
  render() {
    return (
      <div className={this.menuClasses()}>
        <InputSession />
        <StartButton />
      </div>
    );
  }
}

export default Menu;
