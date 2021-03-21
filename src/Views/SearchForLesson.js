import { useState, useEffect } from "react";
import Lessons from "../Components/Lessons";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "../Components/SearchForm";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function SearchForLesson() {
	const [lessons, setLessons] = useState([]);
	const [selectedLessons, setSelectedLessons] = useState([]);

	// load resources when component mounts
	useEffect(() => {
		axios
			.get(`${dbURL}/lessons`)
			.then((results) => results.data)
			.then((lessons) => {
				setLessons(lessons);
				setSelectedLessons(lessons);
			});
	}, []);

	return (
		<div id="search-form-container">
			<section className="page-content-container" as={Col} sm={2} md={3} lg="6">
				<h3 as={Row}>Search for a Lesson</h3>
				<SearchForm
					as={Col}
					searchItems={lessons}
					selectedSearchItems={selectedLessons}
					setSelectedSearchItems={setSelectedLessons}
				/>
				<Lessons lessons={selectedLessons} />
			</section>
		</div>
	);
}
