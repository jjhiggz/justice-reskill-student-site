import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { AppState } from "../App";
import axios from "axios";
import LearningObjective from "./LearningObjective";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function DestroyItem(props) {
	const { state, dispatch } = useContext(AppState);
	const [showError, setShowError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// const { item, itemName } = state;

	useEffect(() => {
		if (showError) {
			setTimeout(() => {
				setShowError(false);
			}, 3000);
		}
	}, [showError]);

	function handleSubmit(event) {
		setIsLoading(true);
		axios
			.delete(dbURL + "/" + state.itemName + "s" + "/" + state.item.id, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => response.data)
			.then((deleted) => {
				// ! Eventually add code to add this mod in responsively
				window.location.reload(false);
			})
			.catch((error) => console.log(error));
	}

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Are you sure that you want to delete this lesson?
				</Modal.Title>
				<Modal.Title>{state.item.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="text"></Form.Group>
					<Button variant="primary" type="submit">
						Delete {LearningObjective.title}
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
