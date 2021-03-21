import { Alert, Modal, Form, Button } from "react-bootstrap";
import {
	validateEmail,
	validateJusticeReskillEmail,
} from "../Functions/validations";

import { useEffect, useState } from "react";

export default function SignUp(props) {
	const [emailInput, setEmailInput] = useState("");
	const [showError, setShowError] = useState(false);

	function handleSubmit(event) {
		if (
			!validateJusticeReskillEmail(emailInput) ||
			!validateEmail(emailInput)
		) {
			event.preventDefault();
			setShowError(true);
		}
	}

	useEffect(() => {
		if (showError) {
			setTimeout(() => {
				setShowError(false);
			}, 3000);
		}
	}, [showError]);

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create Lesson
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							onChange={(event) => {
								setEmailInput(event.target.value);
							}}
							type="email"
							placeholder="Enter Your Justice Reskill Email"
						/>
						<Form.Text className="text-muted">
							We'll send you an email to confirm that it is you
						</Form.Text>
					</Form.Group>
					{showError && !validateJusticeReskillEmail(emailInput) ? (
						<Alert variant="danger">Must Provide a Justice Reskill Email</Alert>
					) : (
						""
					)}
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
