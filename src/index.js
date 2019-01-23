import React from "react";
import ReactDOM from "react-dom";
import "./menu.css";
import "./animate.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Cell from "./components/cell";
import Row from "./components/row";
import Board from "./components/board";
import Menu from "./components/menue";
import JoinButton from "./components/joinButton";
import StartButton from "./components/startButton";

ReactDOM.render(
  <div className="main">
    <Menu />
    <Board />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
