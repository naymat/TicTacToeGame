import React, { Component } from "react";
class InputSession extends Component {
  state = {
    joinGame: false
  };
  constructor() {
    super();
    this.handleJoinButton = this.handleJoinButton.bind(this);
  }

  handleJoinButton() {
    console.log("ehh u joined my guy");
    this.setState({ joinGame: true });
  }
  inputCodeClasses() {
    let classes = "input-session ";
    if (this.state.joinGame === false) {
      classes += "hide";
    } else {
      classes += "animated fadeInDown";
    }
    return classes;
  }
  clickJoinButton() {
    this.setState({ joinGame: true });
  }
  render() {
    return (
      <div>
        <form action="">
          <input
            className={this.inputCodeClasses()}
            type="text"
            placeholder="Enter Code"
          />
        </form>
        <button onClick={this.handleJoinButton} className="button join">
          Join
        </button>
      </div>
    );
  }
}

export default InputSession;
