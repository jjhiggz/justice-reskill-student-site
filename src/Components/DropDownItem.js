import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
const dbURL = "https://justice-reskill.herokuapp.com";

export default function DropDownItem({ mod }) {
	const [isOpen, setIsOpen] = useState(false);
	const [learningObjectives, setLearningObjectives] = useState([]);
	useEffect(() => {
		axios(`${dbURL}/mods/${mod.id}`)
			.then((results) => results.data)
			.then((module) => {
				setLearningObjectives(module.learning_objectives);
			});
	}, [learningObjectives]);
	return (
		<>
			<div className="dropdown-container">
				<LinkContainer to={`?mod=${mod.title}-${mod.id}`}>
					<div
						className="dropdown-button-container"
						onClick={() => setIsOpen(!isOpen)}
					>
						<h4 className="dropdown-button-text">{mod.title}</h4>
					</div>
				</LinkContainer>

				<div className={`dropdown-items-container ${!isOpen ? "hide" : ""}`}>
					{learningObjectives.map((learningObjective, index) => (
						<LinkContainer
							key={learningObjective.id}
							to={`?mod=${mod.title}-${mod.id}&learning-objective=fuck`}
						>
							<p className="dropdown-item">{learningObjective.title}</p>
						</LinkContainer>
					))}
				</div>
			</div>
		</>
	);
}
