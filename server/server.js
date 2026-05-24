const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const users = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (username) => {
    users[socket.id] = username;

    io.emit("message", {
      user: "System",
      text: `${username} joined the chat`
    });
  });

  socket.on("sendMessage", (message) => {
    io.emit("message", {
      user: users[socket.id],
      text: message
    });
  });

  socket.on("disconnect", () => {
    io.emit("message", {
      user: "System",
      text: `${users[socket.id]} left the chat`
    });

    delete users[socket.id];

    console.log("User disconnected:", socket.id);
  });
});

server.listen(8000, () => {
  console.log("Server running on port 5000");
});