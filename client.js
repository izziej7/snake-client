const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // upon connecting, log a message to the console and send a name to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: FMJ");
  })

  // log incoming data to the console
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect
};