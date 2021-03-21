import Table from "react-bootstrap/Table";
export default function LessonsTable(lesson) {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>id</th>
					<th>title</th>
					<th>YT</th>
					<th>GH</th>
					<th>doc</th>
					<th>slides</th>
					<th>description</th>
				</tr>
			</thead>
			<tbody>
				{lessons.map((lesson) => (
					<tr>
						<td>{lesson.id}</td>
						<td>{lesson.title}</td>
						<td>
							<a href={lesson.youtube_link}>YT</a>
						</td>
						<td>
							<a href={lesson.github_link}>GH</a>
						</td>
						<td>
							<a href={lesson.doc_link}>doc</a>
						</td>
						<td>
							<a href={lesson.slides_link}>slides</a>
						</td>
						<td>{lesson.description}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
