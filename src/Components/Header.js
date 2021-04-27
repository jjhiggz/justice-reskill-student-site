// Import react-bootstrap components
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import higgzCodeLogo from "../Assets/HiggzCodeLogo.png";

export default function Header() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
			<Navbar bg="dark">
				<LinkContainer to="/">
					<Navbar.Brand>
						<div
							style={{
								backgroundColor: "white",
								margin: "0px",
							}}
						>
							<img
								src={higgzCodeLogo}
								height="50"
								style={{ margin: "0px", objectFit: "cover" }}
								className="d-inline-block align-top"
								alt="Higgz Code Logo"
							/>
						</div>
					</Navbar.Brand>
				</LinkContainer>
			</Navbar>
			<br />
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<LinkContainer to="/search-for-lesson">
						<Nav.Link>Lessons</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/search-for-resource">
						<Nav.Link>Resources</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/search-for-assessment">
						<Nav.Link>Assessments</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/search-for-video">
						<Nav.Link href="#link">Search For Video</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
