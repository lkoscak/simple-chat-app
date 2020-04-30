import React from "react";

const Message = ({ message }) => {
	return (
		<div className="message">
			<p className="meta">
				{message.nick} <span>{message.time}</span>
			</p>
			<p className="text">{message.text}</p>
		</div>
	);
};

export default Message;
