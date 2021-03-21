import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DropDownItem from "../Components/DropDownItem";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function Course() {
	const [course, setCourse] = useState({});
	const [mods, setMods] = useState([]);

	const { courseId } = useParams();
	const courseIdNo = courseId.split("-")[courseId.split("-").length - 1];

	useEffect(() => {
		axios(`${dbURL}/courses/${courseIdNo}`)
			.then((response) => response.data)
			.then((course) => {
				setCourse(course);
				setMods(course.mods);
			});
	}, [courseIdNo]);

	return (
		<section id="sidebar">
			<h1 className="sidebar-title">{course.title}</h1>
			{mods.map((mod, index) => (
				<DropDownItem key={mod.id} mod={mod} />
			))}
		</section>
	);
}
