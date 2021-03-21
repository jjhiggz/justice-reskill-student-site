import { useParams } from "react-router-dom";
import useQuery from "../CustomHooks/UseQuery";
import { useEffect, useState } from "react";
import { getIdNo } from "../Functions/helpers";
import axios from "axios";
import DropDownItem from "../Components/DropDownItem";
import LearningObjective from "../Components/LearningObjective";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function Course() {
	const queryParams = useQuery();
	const courseIdNo = getIdNo(useParams().courseId);
	const modId = queryParams.get("mod") ? getIdNo(queryParams.get("mod")) : null;
	const learningObjectiveId = queryParams.get("learning-objective")
		? getIdNo(queryParams.get("learning-objective"))
		: null;

	const [course, setCourse] = useState({});
	const [mods, setMods] = useState([]);
	const [learningObjective, setLearningObjective] = useState({
		title: "Please Select a Learning Objective",
		description: "Once you select a learning objective this page will populate",
		lessons: [],
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
				<LearningObjective learningObjective={learningObjective} />
			</section>

			<section id="sidebar">
				<h1 className="sidebar-title">{course.title}</h1>
				{mods.map((mod, index) => (
					<DropDownItem key={mod.id} mod={mod} />
				))}
			</section>
		</div>
	);
}
