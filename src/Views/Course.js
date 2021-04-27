import { useParams } from "react-router-dom";
import useQuery from "../CustomHooks/UseQuery";
import { useContext, useEffect, useState } from "react";
import { getIdNo } from "../Functions/helpers";
import axios from "axios";
import LearningObjective from "../Components/LearningObjective";
import { VscAdd } from "react-icons/vsc";
import { ButtonGroup, Button } from "react-bootstrap";
import DropDownItem from "../Components/DropDownItem";
import DestroyItem from "../Components/DestroyItem";
import DestroyLearningObjective from "../Components/DestroyLearningObjective";
import DestroyMod from "../Components/DestroyMod";
import CreateMod from "../Components/CreateMod";
import CreateLearningObjective from "../Components/CreateLearningObjective";
import CreateItem from "../Components/CreateItem";

import { AppState } from "../App";
const dbURL = "https://justice-reskill.herokuapp.com";

export default function Course() {
	const { state, dispatch } = useContext(AppState);
	const queryParams = useQuery();
	const courseIdNo = 18;
	const learningObjectiveId = queryParams.get("learning-objective")
		? getIdNo(queryParams.get("learning-objective"))
		: null;

	const [course, setCourse] = useState({});
	const [mods, setMods] = useState([]);

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
					dispatch({
						type: "setLearningObjective",
						payload: learningObjective,
					});
				});
		}
	}, [learningObjectiveId]);

	return (
		<div className="page-content-container">
			<section className="right-of-sidebar">
				<CreateMod
					onHide={() => dispatch({ type: "hideCreateMod" })}
					course={course}
					show={state.showCreateMod}
				/>
				<DestroyMod
					show={state.showDeleteMod}
					onHide={() => dispatch({ type: "hideDeleteMod", payload: {} })}
					mod={state.item}
				/>
				<CreateItem
					learningObjective={state.learningObjective}
					onHide={() => dispatch({ type: "hideCreateItem" })}
					show={state.showCreateItem}
				/>
				<DestroyItem
					show={state.showDeleteItem}
					onHide={() => dispatch({ type: "hideDeleteItem" })}
				/>
				<CreateLearningObjective
					mod={mod}
					onHide={() => {
						dispatch({ type: "hideCreateLearningObjective" });
					}}
					show={state.showCreateLearningObjective}
				/>
				<DestroyLearningObjective
					show={state.showDeleteLearningObjective}
					onHide={() =>
						dispatch({ type: "hideDeleteLearningObjective", payload: {} })
					}
					learningObjective={state.learningObjective}
				/>
				<LearningObjective learningObjective={state.learningObjective} />
			</section>

			<section id="sidebar">
				{state.loggedIn && (
					<ButtonGroup>
						<Button variant="dark">{"Add Mod"}</Button>
						<Button
							onClick={() => {
								dispatch({ type: "showCreateMod" });
							}}
							variant="dark"
							title="Create a Mod"
						>
							<VscAdd />
						</Button>
					</ButtonGroup>
				)}
				{mods.map((mod, index) => (
					<DropDownItem key={mod.id} mod={mod} setMod={setMod} />
				))}
			</section>
		</div>
	);
}
