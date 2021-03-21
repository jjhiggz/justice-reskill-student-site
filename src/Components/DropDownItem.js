import { VscAdd } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { makeQueryString } from "../Functions/helpers";

import axios from "axios";
const dbURL = "https://justice-reskill.herokuapp.com";

export default function DropDownItem({
	mod,
	setShowCreateLearningObjective,
	setShowCreateLesson,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [learningObjectives, setLearningObjectives] = useState([]);

	useEffect(() => {
		axios(`${dbURL}/mods/${mod.id}`)
			.then((results) => results.data)
			.then((module) => {
				setLearningObjectives(module.learning_objectives);
			});
	}, [learningObjectives, mod.id]);

	return (
		<>
			<div className="dropdown-container">
				<LinkContainer to={`?${makeQueryString({ key: "mod", object: mod })}`}>
					<div
						className="dropdown-button-container"
						onClick={() => setIsOpen(!isOpen)}
					>
						<h4 className="dropdown-button-text">{mod.title}</h4>
					</div>
				</LinkContainer>
				<VscAdd
					onClick={() => {
						setShowCreateLearningObjective(true);
					}}
				/>

				<div className={`dropdown-items-container ${!isOpen ? "hide" : ""}`}>
					<p>learning objectives: </p>
					{learningObjectives.map((learningObjective, index) => (
						<LinkContainer
							key={learningObjective.id}
							to={
								"?" +
								makeQueryString(
									{ key: "mod", object: mod },
									{ key: "learning-objective", object: learningObjective }
								)
							}
						>
							<div>
								<p className="dropdown-item">{learningObjective.title} </p>
								<VscAdd onClick={() => setShowCreateLesson(true)} />
							</div>
						</LinkContainer>
					))}
				</div>
			</div>
		</>
	);
}
