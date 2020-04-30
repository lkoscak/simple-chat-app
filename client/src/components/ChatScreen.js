import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import Message from "./Message";

const ChatScreen = () => {
	const endpoint = "http://127.0.0.1:5000";
	const [responses, setResponses] = useState([]);
	const [message, setMessage] = useState("");
	const [socket, setSocket] = useState({});
	let myRef = useRef();
	useEffect(() => {
		const socket = socketIOClient(endpoint);
		setSocket(socket);
		// joining the room
		socket.emit("joinRoom", { nick: "Luka", room: "JavaScript" });
		// get message from server
		socket.on("message", (message) =>
			setResponses((prevResponses) => [...prevResponses, message])
		);
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		socket.emit("message", message);
	};

	return (
		<div className="chat-container">
			<header className="chat-header">
				<h1>
					<i className="fas fa-smile"></i> Chat App
				</h1>
				<a href="index.html" className="btn">
					Leave Room
				</a>
			</header>
			<main className="chat-main">
				<div className="chat-sidebar">
					<h3>
						<i className="fas fa-comments"></i> Room Name:
					</h3>
					<h2 id="room-name"></h2>
					<h3>
						<i className="fas fa-users"></i> Users
					</h3>
					<ul id="users"></ul>
				</div>
				<div className="chat-messages" ref={myRef}>
					{responses.map((item, index) => (
						<Message message={item} key={index} />
					))}
				</div>
			</main>
			<div className="chat-form-container">
				<form id="chat-form" onSubmit={sendMessage}>
					<input
						id="msg"
						type="text"
						name="message"
						placeholder="Enter Message"
						required
						autoComplete="off"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className="btn" type="submit">
						<i className="fas fa-paper-plane"></i> Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChatScreen;
