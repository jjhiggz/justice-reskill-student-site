import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { recursiveCountSubstring } from "../Functions/helpers";

export default function SearchForm({
	setSelectedSearchItems,
	searchItems,
	selectedSearchItems,
}) {
	const [searchTerm, setSearchTerm] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		setSelectedSearchItems(
			searchItems.filter((video) => recursiveCountSubstring(video, searchTerm))
		);
		setSearchTerm("");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group
				as={Row}
				sm={2}
				md={3}
				lg={4}
				controlId="searchItemsearchTerm"
				className="justify-content-center"
			>
				<Col>
					<Form.Control
						placeholder="tag, videoname, search term, etc..."
						value={searchTerm}
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>
				</Col>
				<Button type="submit">Submit</Button>
			</Form.Group>
			{searchItems.length !== selectedSearchItems.length ? (
				<Button
					onClick={() => {
						setSelectedSearchItems(searchItems);
					}}
					variant="danger"
					size="sm"
				>
					Clear Search
				</Button>
			) : (
				""
			)}
		</Form>
	);
}
