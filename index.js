const express = require("express");
const app = express();
const http = require("http");
const home = require("./routes/home");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.use("/home", home);

server.listen(3000, () => {
  console.log("listening on *:3000");
});

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
