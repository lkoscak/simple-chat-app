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

	// User joining a room
	socket.on("joinRoom", ({ nick, room }) => {
		// Save a user in db or locally
		socket.join(room);

		// Message to connected user on connection
		socket.emit("message", {
			text: `Welcome to chat ${nick}`,
			nick,
			time: "some time",
		});

		// Message to other users on new user connection
		socket.broadcast.to(room).emit("message", {
			text: `Welcome to chat ${nick}`,
			nick,
			time: "some time",
		});
	});

	// User message to chat
	socket.on("message", (message) =>
		io.to("JavaScript").emit("message", {
			text: message,
			nick: message,
			time: "some time",
		})
	);

	/* User disconnected
	socket.on("disconnect", () => {
		io.emit("message", `${nick} left the room`);
    });
    */
});

const port = process.env.PORT || 5000;

//app.get("/", (req, res, next) => res.send("Hello world"));

server.listen(port, console.log(`Listening on port ${port}`));
