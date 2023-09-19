const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function(playerInitials) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // upon connecting, log a message to the console and send a name to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: " + playerInitials);
  });

  // log incoming data to the console
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};