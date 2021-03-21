import Lessons from "./Lessons";

export default function LearningObjective({ learningObjective }) {
	const { lessons } = learningObjective;

	return (
		<div className="learning-objective-container">
			<h1>{learningObjective.title}</h1>
			<p>{learningObjective.description}</p>
			<Lessons lessons={lessons} />
		</div>
	);
}
