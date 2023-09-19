// declare constants for IP and PORT
const IP = "localhost";
const PORT = 50541;

// optional suggestion in Constants page on Compass
// declare movement and message keys in a constant object
const movementMessageKeys = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right",
  "g": "Say: Good Game!",
  "o": "Say: Oops!"
};

module.exports = {
  IP,
  PORT,
  movementMessageKeys
};