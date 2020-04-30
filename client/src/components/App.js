import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInScreen from "./SignInScreen";
import ChatScreen from "./ChatScreen";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={SignInScreen} />
				<Route exact path="/chat" component={ChatScreen} />
			</Switch>
		</Router>
	);
};

export default App;
