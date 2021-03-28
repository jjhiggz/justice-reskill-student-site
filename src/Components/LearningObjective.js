import ItemTable from "./ItemTable";

export default function LearningObjective({ learningObjective }) {
	// const { state, dispatch } = useContext(AppState);
	const { lessons, resources, assessments } = learningObjective;

	return (
		<div className="learning-objective-container">
			<h1>{learningObjective.title}</h1>
			<p>{learningObjective.description}</p>
			{lessons ? (
				<ItemTable
					learningObjective={learningObjective}
					items={lessons}
					itemName="lesson"
				/>
			) : (
				""
			)}
			{resources ? (
				<ItemTable
					learningObjective={learningObjective}
					items={resources}
					itemName="resource"
				/>
			) : (
				""
			)}
			{assessments ? (
				<ItemTable
					learningObjective={learningObjective}
					items={assessments}
					itemName="assessment"
				/>
			) : (
				""
			)}
		</div>
	);
}
