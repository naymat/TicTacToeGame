import React from "react";
import ReactDOM from "react-dom";
import "./menu.css";
import "./animate.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import GameBoard from "./components/board";
import Menu from "./components/menue";
import Board from "./games/Board";

let board = new Board();
ReactDOM.render(
  <div className="main">
    {/* <Menu /> */}
    <GameBoard board={board} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
