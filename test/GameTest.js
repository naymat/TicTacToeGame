const Game = require("../src/games/Game");
const Player = require("../src/games/Player");
const Coordinate = require("../src/games/Coordinate");
const assert = require("chai").assert;

describe("Game", function() {
  let game, p1, p2;
  beforeEach(() => {
    game = new Game();

    p1 = new Player("X");
    p2 = new Player("O");
    game.addPlayer(p1);
    game.addPlayer(p2);
  });
  it("Starts game", function() {
    assert(true);
  });

  it("Tests player 1 mark", function() {
    let players = game.getPlayers();
    player1 = players[0];
    assert.equal(player1.getMark(), "X");
  });
  it("Tests player 2 mark", function() {
    let players = game.getPlayers();
    player1 = players[1];
    assert.equal(player1.getMark(), "O");
  });

  it("Player Attempting to go twice", function() {
    game.assignTurn(p1);
    game.markCellByCoordinate(p1, new Coordinate(1, 1));
    var sucessful = game.markCellByCoordinate(p1, new Coordinate(1, 2));

    assert.isFalse(sucessful, "Player was not able to go twice in a row");
  });
  it("Player attempting to mark cell that's been marked", function() {
    game.assignTurn(p1);
    game.markCellByCoordinate(p1, new Coordinate(1, 1));
    let sucessful = game.markCellByCoordinate(p2, new Coordinate(1, 1));
    assert.isFalse(
      sucessful,
      "Player was not able to mark cell that had been marked"
    );
  });

  describe("Testing Current Turn Functionality", () => {
    it("assign player1 to be current player", function() {
      game.assignTurn(p1);

      assert.equal(game.getTurn(), p1);
    });
    it("assign curr turn to p1, then test nextTurn", function() {
      game.assignTurn(p1);
      game.nextTurn();
      assert.equal(game.getTurn(), p2);
    });
    it("Test wrap around functionality of nextTurn", function() {
      game.assignTurn(p1);
      game.nextTurn();
      game.nextTurn();
      assert.equal(game.getTurn(), p1);
    });
  });
});
