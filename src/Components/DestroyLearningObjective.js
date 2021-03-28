import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function DestroyLearningObjective(props) {
	const [showError, setShowError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

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
			.delete(dbURL + "/learning_objectives/" + props.learningObjective.id, {
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
					Are you sure that you want to delete this Learning Objective?
				</Modal.Title>
				<Modal.Title>{props.learningObjective.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="text"></Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
