import { useParams } from "react-router-dom";
import useQuery from "../CustomHooks/UseQuery";
import { useEffect, useState } from "react";
import { getIdNo } from "../Functions/helpers";
import axios from "axios";
import DropDownItem from "../Components/DropDownItem";
import LearningObjective from "../Components/LearningObjective";
import { VscAdd } from "react-icons/vsc";
import { ButtonGroup, Button } from "react-bootstrap";
import CreateMod from "../Components/CreateMod";
import CreateLearningObjective from "../Components/CreateLearningObjective";
import CreateLesson from "../Components/CreateLesson";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function Course() {
	const queryParams = useQuery();
	const courseIdNo = getIdNo(useParams().courseId);
	const learningObjectiveId = queryParams.get("learning-objective")
		? getIdNo(queryParams.get("learning-objective"))
		: null;

	const [course, setCourse] = useState({});
	const [mods, setMods] = useState([]);
	const [showCreateMod, setShowCreateMod] = useState(false);
	const [
		showCreateLearningObjective,
		setShowCreateLearningObjective,
	] = useState(false);

	const [showCreateLesson, setShowCreateLesson] = useState(false);

	const [learningObjective, setLearningObjective] = useState({
		title: "Please Select a Learning Objective",
		description: "Once you select a learning objective this page will populate",
		lessons: [],
	});

	const [mod, setMod] = useState({
		title: "Loading",
		description: "Loading",
		number: "loading",
	});

	// initially load up course
	useEffect(() => {
		axios(`${dbURL}/courses/${courseIdNo}`)
			.then((response) => response.data)
			.then((course) => {
				setCourse(course);
				setMods(course.mods);
			});
	}, [courseIdNo]);

	// only set learning objective if it changes in query params
	// note the mod query params is more for show and for history reasons, then for website functionality
	useEffect(() => {
		if (learningObjectiveId) {
			axios(`${dbURL}/learning_objectives/${learningObjectiveId}`)
				.then((response) => response.data)
				.then((learningObjective) => {
					setLearningObjective(learningObjective);
				});
		}
	}, [learningObjectiveId]);

	return (
		<div className="page-content-container">
			<section className="right-of-sidebar">
				<CreateMod
					onHide={setShowCreateMod}
					course={course}
					show={showCreateMod}
				/>
				<CreateLesson
					learningObjective={learningObjective}
					onHide={setShowCreateLesson}
					show={showCreateLesson}
				/>
				<CreateLearningObjective
					mod={mod}
					onHide={setShowCreateLearningObjective}
					show={showCreateLearningObjective}
				/>
				<LearningObjective
					setShowCreateLesson={setShowCreateLesson}
					learningObjective={learningObjective}
				/>
			</section>

			<section id="sidebar">
				<ButtonGroup>
					<Button variant="dark">{course.title}</Button>
					<Button
						onClick={() => {
							setShowCreateMod(true);
						}}
						variant="dark"
						title="create a course"
					>
						<VscAdd />
					</Button>
				</ButtonGroup>
				{mods.map((mod, index) => (
					<DropDownItem
						key={mod.id}
						mod={mod}
						setShowCreateLearningObjective={setShowCreateLearningObjective}
						setShowCreateLesson={setShowCreateLesson}
						setLearningObjective={setLearningObjective}
						setMod={setMod}
					/>
				))}
			</section>
		</div>
	);
}
