import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default function SearchForm() {
	return (
		<Form>
			<Form.Group
				as={Row}
				sm={2}
				md={3}
				lg={4}
				controlId="videoSearchTerm"
				className="justify-content-center"
			>
				<Col>
					<Form.Control placeholder="tag, videoname, search term, etc..." />
				</Col>
				<Button as={Col} md="2" variant="primary" type="submit">
					Submit
				</Button>
			</Form.Group>
		</Form>
	);
}
