import Lessons from "./Lessons";
import { VscAdd } from "react-icons/vsc";
import { ButtonGroup, Button } from "react-bootstrap";
import { AppState } from "../App";
import { useContext } from "react";

export default function LearningObjective({ learningObjective }) {
	const { state, dispatch } = useContext(AppState);
	const { lessons } = learningObjective;

	return (
		<div className="learning-objective-container">
			<h1>{learningObjective.title}</h1>
			<p>{learningObjective.description}</p>
			<Lessons lessons={lessons} />
			{learningObjective.id ? (
				state.loggedIn ? (
					<ButtonGroup>
						<Button
							onClick={() => {
								dispatch({ type: "showCreateLesson" });
							}}
						>
							<VscAdd />
						</Button>
					</ButtonGroup>
				) : (
					""
				)
			) : (
				""
			)}
		</div>
	);
}
