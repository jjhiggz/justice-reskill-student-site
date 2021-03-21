import { HashRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Views/Home";
import SearchForLesson from "./Views/SearchForLesson";
import SearchForVideo from "./Views/SearchForVideo";
import Header from "./Components/Header";
import Course from "./Views/Course";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import CSS
import "./App.css";

import SignUp from "./Components/SignUp";

function App() {
	const [showSignIn, setShowSignIn] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);

	return (
		<div className="App">
			<HashRouter>
				<Header setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} />
				<SignUp onHide={setShowSignUp} show={showSignUp} />

				<section id="main-container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/course/:courseId" component={Course} />
						<Route path="/search-for-video" component={SearchForVideo} />
						<Route path="/search-for-lesson" component={SearchForLesson} />
					</Switch>
				</section>
			</HashRouter>
		</div>
	);
}

export default App;
