import { useState, useEffect, useContext } from "react";
import { VscAdd } from "react-icons/vsc";
import { createGroups } from "../Functions/helpers";
import { AppState } from "../App";
import CreateVideo from "../Components/CreateVideo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import VideoDeck from "../Components/VideoDeck";
import SearchForm from "../Components/SearchForm";
import axios from "axios";

const dbURL = "https://justice-reskill.herokuapp.com";
const cardWidth = 3;

export default function SearchForVideo() {
	const [videos, setVideos] = useState([]);
	const [videoDecks, setVideoDecks] = useState([]);
	const [selectedVideos, setSelectedVideos] = useState([]);
	const { state, dispatch } = useContext(AppState);

	// load resources when component mounts
	useEffect(() => {
		axios
			.get(`${dbURL}/videos`)
			.then((results) => results.data)
			.then((videos) => {
				setVideos(videos);
				setSelectedVideos(videos);
			});
	}, []);

	//every time selected videos change, you need to reset the slide decks
	useEffect(() => {
		setVideoDecks(createGroups(selectedVideos, cardWidth));
	}, [selectedVideos]);

	return (
		<div id="search-form-container">
			<CreateVideo
				show={state.showCreateVideo}
				onHide={() => dispatch({ type: "hideCreateVideo" })}
			/>
			<section className="page-content-container" as={Col} sm={2} md={3} lg="6">
				<h3 as={Row}>Search for a Video</h3>
				<SearchForm
					as={Col}
					searchItems={videos}
					selectedSearchItems={selectedVideos}
					setSelectedSearchItems={setSelectedVideos}
				/>
				{state.loggedIn && (
					<Button onClick={() => dispatch({ type: "showCreateVideo" })}>
						<VscAdd />
					</Button>
				)}
				{videoDecks.map((videoDeck, index) => {
					return <VideoDeck videos={videoDeck} key={index} />;
				})}
			</section>
		</div>
	);
}
