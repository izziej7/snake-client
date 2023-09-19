const { connect } = require("./client");
const { setupInput } = require("./input");

// optional suggestion in Constants page on Compass
// receive playerInitials as a command line argument
const playerInitials = process.argv.slice(2);

console.log("Connecting ...");

// pass the playerInitials into the connect function
const conn = connect(playerInitials);

// pass the conn object into the setupInput function
setupInput(conn);
