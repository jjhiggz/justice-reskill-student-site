import { VscAdd } from "react-icons/vsc";
import { IoTrashBin } from "react-icons/io5";
import { useState, useEffect, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { makeQueryString } from "../Functions/helpers";
import { AppState } from "../App";

import axios from "axios";
const dbURL = "https://justice-reskill.herokuapp.com";

export default function DropDownItem({ mod }) {
	const [isOpen, setIsOpen] = useState(false);
	const { state, dispatch } = useContext(AppState);
	const [fullMod, setFullMod] = useState([]);

	useEffect(() => {
		axios(`${dbURL}/mods/${mod.id}`)
			.then((results) => results.data)
			.then((module) => {
				setFullMod(module);
			});
	}, [mod.id]);

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
				{state.loggedIn ? (
					<IoTrashBin
						onClick={() => {
							dispatch({ type: "showDeleteMod", payload: mod });
						}}
					/>
				) : (
					""
				)}

				{state.loggedIn ? (
					<VscAdd
						onClick={() => {
							dispatch({
								type: "showCreateLearningObjective",
								payload: { itemName: "learning_objective", item: mod },
							});
						}}
					/>
				) : (
					""
				)}

				<div className={`dropdown-items-container ${!isOpen ? "hide" : ""}`}>
					<p>learning objectives: </p>
					{(fullMod.learning_objectives ? fullMod.learning_objectives : []).map(
						(learningObjective, index) => (
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
								<div className="dropdown-item-container">
									<p className="dropdown-item">
										{learningObjective.title}
										{state.loggedIn ? (
											<IoTrashBin
												onClick={(event) => {
													event.stopPropagation();
													dispatch({
														type: "showDeleteLearningObjective",
														payload: learningObjective,
													});
												}}
											/>
										) : (
											""
										)}
									</p>
								</div>
							</LinkContainer>
						)
					)}
				</div>
			</div>
		</>
	);
}
