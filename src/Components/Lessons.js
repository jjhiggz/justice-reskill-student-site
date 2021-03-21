import Table from "react-bootstrap/Table";
import { GoMarkGithub } from "react-icons/go";
import { FiYoutube } from "react-icons/fi";
import { CgLoadbarDoc } from "react-icons/cg";
import { FaFilePowerpoint } from "react-icons/fa";

export default function Lessons({ lessons }) {
	return (
		<div className="lessons-container">
			{lessons.length > 0 ? (
				<Table striped bordered hover>
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
