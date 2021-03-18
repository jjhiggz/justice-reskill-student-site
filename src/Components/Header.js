// Import react-bootstrap components
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// Import LinkContainer to use Links with React Router
import { LinkContainer } from "react-router-bootstrap";
// import logo
import justiceReskillLogo from "../Assets/justicereskill_logo.png";

export default function Header() {
	return (
		<Navbar bg="light" expand="lg" fixed="top">
			<Navbar bg="light">
				<LinkContainer to="/">
					<Navbar.Brand>
						<img
							src={justiceReskillLogo}
							height="40"
							className="d-inline-block align-top"
							alt="Justice Reskill Logo"
						/>
					</Navbar.Brand>
				</LinkContainer>
			</Navbar>
			<br />
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<LinkContainer to="search-for-lesson">
						<Nav.Link>Search For Lesson</Nav.Link>
					</LinkContainer>
					<LinkContainer to="search-for-video">
						<Nav.Link href="#link">Search For Video</Nav.Link>
					</LinkContainer>
					<NavDropdown title="Courses" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Frontend</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Frontend (React)
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Backend</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.4">FullStack</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
