const { movementMessageKeys } = require("./constants");

// stores the active TCP connection object
let connection;

// trigger an action when a specific key is pressed
const handleUserInput = function(keyPressed) {
  // if ctrl + c is pressed, exit the program
  if (keyPressed === "\u0003") {
    process.exit();
  }
  // search for the keyPressed in the keys of the movementMessageKeys object and if a match is found, write the value to the server
  for (const objKey of Object.keys(movementMessageKeys)) {
    if (keyPressed === objKey) {
      connection.write(movementMessageKeys[objKey]);
    }
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};