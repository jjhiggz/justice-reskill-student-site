import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Views/Home";
import SearchForLesson from "./Views/SearchForLesson";
import SearchForVideo from "./Views/SearchForVideo";
import Header from "./Components/Header";
import Course from "./Views/Course";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import CSS
import "./App.css";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Header />
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
