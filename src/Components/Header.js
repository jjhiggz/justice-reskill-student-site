// Import react-bootstrap components
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import justiceReskillLogo from "../Assets/justicereskill_logo.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppState } from "../App";
const dbURL = "https://justice-reskill.herokuapp.com";

export default function Header() {
	const { dispatch, state } = useContext(AppState);
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		axios(dbURL + "/courses")
			.then((result) => result.data)
			.then(setCourses);
	}, []);

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
					<LinkContainer to="/search-for-lesson">
						<Nav.Link>Search For Lesson</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/search-for-video">
						<Nav.Link href="#link">Search For Video</Nav.Link>
					</LinkContainer>
					<NavDropdown title="Courses" id="basic-nav-dropdown">
						{courses.map((course) => {
							return (
								<LinkContainer
									key={course.id}
									to={`/course/${course.title.split(" ").join("-")}-${
										course.id
									}`}
								>
									<NavDropdown.Item>{course.title}</NavDropdown.Item>
								</LinkContainer>
							);
						})}
					</NavDropdown>
				</Nav>
				<div>
					<Button
						onClick={() => dispatch({ type: "showSignIn" })}
						variant="outline-success"
					>
						Sign In
					</Button>
				</div>

				<div>
					<Button
						onClick={() => {
							dispatch({ type: "showSignUp" });
						}}
						variant="outline-success"
					>
						Sign Up( Teachers Only )
					</Button>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
}
