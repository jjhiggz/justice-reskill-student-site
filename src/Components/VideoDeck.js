// import bootstrap components
import CardDeck from "react-bootstrap/CardDeck";
import VideoCard from "./VideoCard";

export default function VideoDeck({ videos }) {
	return (
		<CardDeck className="card-deck">
			{videos.map((video) => {
				return <VideoCard video={video} key={video.id} />;
			})}
		</CardDeck>
	);
}
