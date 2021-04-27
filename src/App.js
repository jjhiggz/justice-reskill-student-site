import { HashRouter, Switch, Route } from "react-router-dom";
import reducer from "./reducer";
import React, { useReducer, useState } from "react";
import Home from "./Views/Home";
import SearchForItem from "./Views/SearchForItem";
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
		showCreateItem: false,
		showCreateLearningObjective: false,
		showCreateModule: false,
		showCreateVideo: false,
		showDeleteItem: false,
		showDeleteLearningObjective: false,
		showDeleteMod: false,
		loggedIn: false,
		lesson: {},
		mod: {
			title: "Default mod",
			id: "",
		},
		item: {},
		itemName: {},
		learningObjective: {
			title: "Please Select a Learning Objective",
			description:
				"Once you select a learning objective this page will populate",
			lessons: [],
		},
		learningObjectives: [],
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
							<Route exact path="/" component={Course} />
							{/* <Route path="/course/:courseId" component={Course} /> */}
							<Route path="/search-for-video" component={SearchForVideo} />
							<Route path="/search-for-lesson">
								<SearchForItem itemName="lesson" />
							</Route>
							<Route path="/search-for-assessment">
								<SearchForItem itemName="assessment" />
							</Route>
							<Route path="/search-for-resource">
								<SearchForItem itemName="resource" />
							</Route>
						</Switch>
					</section>
				</HashRouter>
			</div>
		</AppState.Provider>
	);
}

export default App;
