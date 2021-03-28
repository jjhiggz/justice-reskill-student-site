import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { AppState } from "../App";
import axios from "axios";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function CreateLearningObjective(props) {
	const { state, dispatch } = useContext(AppState);
	const [showError, setShowError] = useState(false);
	const [titleInput, setTitleInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");
	const [numberInput, setNumberInput] = useState("");
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
			.post(
				dbURL + "/learning_objectives",
				{
					learning_objective: {
						title: titleInput,
						description: descriptionInput,
						number: numberInput,
						mod_id: state.mod.id,
					},
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response) => response.data)
			.then((newMod) => {
				// Todo Eventually add code to add this mod in responsively
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
					Create LearningObjective for {state.item.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="text">
						<Form.Label>Title</Form.Label>
						<Form.Control
							onChange={(event) => {
								setTitleInput(event.target.value);
							}}
							type="text"
							placeholder="Enter a title for this learning objective"
						/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							onChange={(event) => {
								setDescriptionInput(event.target.value);
							}}
							type="text"
							placeholder="Enter a title for this learning objective"
						/>
					</Form.Group>
					<Form.Group controlId="text"></Form.Group>
					<Form.Group controlId="number">
						<Form.Label>number</Form.Label>
						<Form.Control
							onChange={(event) => {
								setNumberInput(event.target.value);
							}}
							type="number"
							placeholder="This will be the order"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
