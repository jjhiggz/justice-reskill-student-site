import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function CreateLearningObjective(props) {
	const [showError, setShowError] = useState(false);
	const [titleInput, setTitleInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");
	const [driveLinkInput, setDriveLinkInput] = useState("");
	const [youtubeLinkInput, setYoutubeLinkInput] = useState("");
	const [githubLinkInput, setGithubLinkInput] = useState("");
	const [docLinkInput, setDocLinkInput] = useState("");
	const [slidesLinkInput, setSlidesLinkInput] = useState("");

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
				dbURL + "/lessons",
				{
					lesson: {
						learning_objective_id: props.learningObjective.id,
						title: titleInput,
						drive_link: driveLinkInput,
						youtube_link: youtubeLinkInput,
						github_link: githubLinkInput,
						doc_link: docLinkInput,
						slides_link: slidesLinkInput,
						description: descriptionInput,
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
					Create Lesson for: {props.learningObjective.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="text">
						<Form.Label>Title:</Form.Label>
						<Form.Control
							onChange={(event) => {
								setTitleInput(event.target.value);
							}}
							type="text"
							placeholder="Enter a title for this lesson"
						/>
					</Form.Group>
					<Form.Group controlId="text">
						<Form.Label>Drive Link:</Form.Label>
						<Form.Control
							onChange={(event) => {
								setDriveLinkInput(event.target.value);
							}}
							type="text"
							placeholder="Enter a drive link here"
						/>
					</Form.Group>
					<Form.Group controlId="text">
						<Form.Label>Youtube Link: </Form.Label>
						<Form.Control
							onChange={(event) => {
								setYoutubeLinkInput(event.target.value);
							}}
							type="text"
							placeholder="Youtube URL...."
						/>
					</Form.Group>
					<Form.Group controlId="text">
						<Form.Label>Github: </Form.Label>
						<Form.Control
							onChange={(event) => {
								setGithubLinkInput(event.target.value);
							}}
							type="text"
							placeholder="Github URL...."
						/>
					</Form.Group>
					<Form.Group controlId="text">
						<Form.Label>Doc Link: </Form.Label>
						<Form.Control
							onChange={(event) => {
								setDocLinkInput(event.target.value);
							}}
							type="text"
							placeholder="Doc URL..."
						/>
					</Form.Group>
					<Form.Group controlId="text">
						<Form.Label>Slides Link: </Form.Label>
						<Form.Control
							onChange={(event) => {
								setSlidesLinkInput(event.target.value);
							}}
							type="text"
							placeholder="Slides URL..."
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
							placeholder="Enter a short description for this lesson here"
						/>
					</Form.Group>
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
