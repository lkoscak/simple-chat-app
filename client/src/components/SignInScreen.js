import React, { useState } from "react";
//import { Link } from "react-router-dom";

const SignInScreen = () => {
	const [formInputs, setFormInputs] = useState({
		username: "",
		room: "JavaScript",
	});

	const inputChanged = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevValues) => {
			return {
				...prevValues,
				[name]: value,
			};
		});
	};

	const signIn = (e) => {
		e.preventDefault();
		// socket message with form object
	};

	return (
		<div className="join-container">
			<header className="join-header">
				<h1>
					<i className="fas fa-smile"></i> Chat App
				</h1>
			</header>
			<main className="join-main">
				<form onSubmit={signIn}>
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required
							onChange={inputChanged}
							value={formInputs.username}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="room">Room</label>
						<select
							name="room"
							id="room"
							onChange={inputChanged}
							value={formInputs.room}
						>
							<option value="JavaScript">JavaScript</option>
							<option value="Python">Python</option>
							<option value="PHP">PHP</option>
							<option value="C#">C#</option>
							<option value="Ruby">Ruby</option>
							<option value="Java">Java</option>
						</select>
					</div>
					<button type="submit" className="btn">
						Join Chat
					</button>
				</form>
			</main>
		</div>
	);
};

export default SignInScreen;
