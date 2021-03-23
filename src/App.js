import { HashRouter, Switch, Route } from "react-router-dom";
import reducer from "./reducer";
import React, { useReducer, useState } from "react";
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

export const AppState = React.createContext();

function App() {
	const initialState = {
		showSignUp: false,
		showSignIn: false,
		showCreateLesson: false,
		showCreateLearningObjective: false,
		showCreateModule: false,
		loggedIn: true,
		lesson: {},
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AppState.Provider value={{ state, dispatch }}>
			<div className="App">
				<HashRouter>
					<Header />
					<SignUp
						onHide={() => dispatch({ type: "hideSignUp" })}
						show={state.showSignUp}
					/>
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
		</AppState.Provider>
	);
}

export default App;
