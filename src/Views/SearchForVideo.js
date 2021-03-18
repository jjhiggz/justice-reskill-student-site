import { useState, useEffect } from "react";
import { createGroups } from "../Functions/helpers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoDeck from "../Components/VideoDeck";
import SearchForm from "../Components/SearchForm";
import axios from "axios";
const dbURL = "https://justice-reskill.herokuapp.com";
const cardWidth = 3;
export default function SearchForVideo() {
	const [videos, setVideos] = useState([]);
	const [videoDecks, setVideoDecks] = useState([]);
	const [selectedVideos, setSelectedVideos] = useState([]);

	useEffect(() => {
		if (selectedVideos.length === 0) {
			axios
				.get(`${dbURL}/videos`)
				.then((results) => results.data)
				.then((videos) => {
					setVideos(videos);
					setSelectedVideos(videos);
				});
		}
		setVideoDecks(createGroups(selectedVideos, cardWidth));
	}, [selectedVideos]);
	return (
		<div>
			<section className="page-content-container" as={Col} sm={2} md={3} lg="6">
				<h3 as={Row}>Search for a Video</h3>
				<SearchForm as={Col} />
				{videoDecks.map((videoDeck, index) => {
					return <VideoDeck videos={videoDeck} key={index} />;
				})}
			</section>
		</div>
	);
}
