const { connect } = require("./client");
const { setupInput } = require("./input");

// optional suggestion in Constants page on Compass
// receive playerInitials as a command line argument
const playerInitials = process.argv.slice(2);

// validate playerInitials before running game
const validateInput = function(playerInitials) {
  // if the string is more than 3 characters long || if more than 1 argument is provided || if the string contains any characters other than letters
  if (playerInitials[0].length > 3 || playerInitials.length > 1 || !(/^[A-Za-z]+$/.test(playerInitials[0]))) {
    console.error("Error: invalid initials");
    process.exit();
  }

  console.log("Connecting ...");

  // pass the playerInitials into the connect function
  const conn = connect(playerInitials);

  // pass the conn object into the setupInput function
  setupInput(conn);
};

validateInput(playerInitials);




