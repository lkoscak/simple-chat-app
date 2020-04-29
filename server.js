const path = require("path");

const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
	console.log("New connection..");

	socket.emit("message", "Hi there");
});

const port = process.env.PORT || 5000;

//app.get("/", (req, res, next) => res.send("Hello world"));

server.listen(port, console.log(`Listening on port ${port}`));
