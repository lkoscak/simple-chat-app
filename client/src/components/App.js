import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

export const App = () => {
	const endpoint = "http://127.0.0.1:5000";

	const [response, setResponse] = useState("No message yet...");

	useEffect(() => {
		const socket = socketIOClient(endpoint);
		socket.on("message", (message) => setResponse(message));
	}, []);

	return (
		<div>
			<h1>{response}</h1>
		</div>
	);
};
