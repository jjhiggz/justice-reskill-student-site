import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { GoMarkGithub } from "react-icons/go";
import { FiYoutube } from "react-icons/fi";
import { CgLoadbarDoc } from "react-icons/cg";
import { FaFilePowerpoint } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { VscAdd } from "react-icons/vsc";
import { AppState } from "../App";
import { useContext } from "react";

export default function Lessons({ lessons }) {
	const { state, dispatch } = useContext(AppState);
	return (
		<div className="lessons-container">
			{lessons.length > 0 ? (
				<Table className="lessons-table" striped bordered hover>
					<thead>
						<tr>
							<th>Title</th>
							<th>YouTube</th>
							<th>Github</th>
							<th>Doc</th>
							<th>Slides</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{lessons.map((lesson) => (
							<tr>
								<td>{lesson.title}</td>
								<td>
									{lesson.youtube_link ? (
										<a href={lesson.youtube_link}>
											<FiYoutube />
										</a>
									) : (
										"---"
									)}
								</td>
								<td>
									{lesson.github_link ? (
										<a href={lesson.github_link}>
											<GoMarkGithub />
										</a>
									) : (
										"---"
									)}
								</td>
								<td>
									{lesson.doc_link ? (
										<a href={lesson.doc_link}>
											<CgLoadbarDoc />
										</a>
									) : (
										"---"
									)}
								</td>
								<td>
									{lesson.slides ? (
										<a href={lesson.slides_link}>
											<FaFilePowerpoint />
										</a>
									) : (
										"---"
									)}
								</td>
								<td>{lesson.description}</td>
								{state.loggedIn ? (
									<td>
										<Button variant="danger">
											<IoTrashBin
												onClick={() =>
													dispatch({ type: "setLesson", payload: lesson })
												}
											/>
										</Button>
									</td>
								) : (
									""
								)}
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				""
			)}
		</div>
	);
}
