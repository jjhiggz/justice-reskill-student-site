import Card from "react-bootstrap/Card";
import { createYoutubeLink } from "../Functions/helpers";

export default function VideoCard({ video }) {
	return (
		<Card variant="top" border="secondary" style={{ width: "18rem" }}>
			<iframe
				src={createYoutubeLink(video.link)}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title={video.title}
			></iframe>
			<Card.Body>
				<a href={video.link}>
					<Card.Title>{video.title}</Card.Title>
				</a>
				<Card.Text>{video.tags}</Card.Text>
			</Card.Body>
		</Card>
	);
}
