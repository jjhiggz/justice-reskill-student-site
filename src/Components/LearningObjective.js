import Lessons from "./Lessons";
import { VscAdd } from "react-icons/vsc";
import { ButtonGroup, Button } from "react-bootstrap";

export default function LearningObjective({
	setShowCreateLesson,
	learningObjective,
}) {
	const { lessons } = learningObjective;

	return (
		<div className="learning-objective-container">
			<h1>{learningObjective.title}</h1>
			<p>{learningObjective.description}</p>
			<Lessons lessons={lessons} />
			{learningObjective.id ? (
				<ButtonGroup>
					<Button
						onClick={() => {
							setShowCreateLesson(true);
						}}
					>
						<VscAdd />
					</Button>
				</ButtonGroup>
			) : (
				""
			)}
		</div>
	);
}
