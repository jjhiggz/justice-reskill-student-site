import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function CreateMod(props) {
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
				dbURL + "/mods",
				{
					mod: {
						title: titleInput,
						description: descriptionInput,
						number: numberInput,
						course_id: props.course.id,
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
					Create Mod for {props.course.title}
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
							placeholder="Enter a title for this mod"
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
							placeholder="Enter a title for this mod"
						/>
					</Form.Group>
					<Form.Group controlId="text"></Form.Group>
					<Form.Group controlId="number">
						<Form.Label>number</Form.Label>
						<Form.Control
							onChange={(event) => {
								setDescriptionInput(event.target.value);
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
