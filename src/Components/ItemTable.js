import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/Button";
import { GoMarkGithub } from "react-icons/go";
import { FiYoutube } from "react-icons/fi";
import { FaFilePowerpoint } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { VscAdd } from "react-icons/vsc";
import { AppState } from "../App";
import { useContext } from "react";
import { toPascalCase } from "../Functions/helpers";

export default function ItemTable({ itemName, items, learningObjective }) {
	const { state, dispatch } = useContext(AppState);
	return (
		<div className="items-container">
			<h2>{toPascalCase(itemName)}s</h2>
			{items.length > 0 ? (
				<Table className="items-table" striped bordered hover>
					<thead>
						<tr>
							<th>Title</th>
							<th>YouTube</th>
							<th>Github</th>
							<th>Link</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<tr key={"tr-" + item.id}>
								<td>{item.title}</td>
								<td>
									{item.youtube_link ? (
										<a href={item.youtube_link}>
											<FiYoutube />
										</a>
									) : (
										"---"
									)}
								</td>
								<td>
									{item.github_link && (
										<a href={item.github_link}>
											<GoMarkGithub />
										</a>
									)}
								</td>
								<td>
									{item.drive_link && (
										<a href={item.drive_link}>
											<FaFilePowerpoint />
										</a>
									)}
								</td>
								<td>{item.description}</td>
								{state.loggedIn && (
									<td>
										<Button variant="danger">
											<IoTrashBin
												onClick={() => {
													dispatch({
														type: "showDeleteItem",
														payload: { item: item, itemName: itemName },
													});
												}}
											/>
										</Button>
									</td>
								)}
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<h4>There are no {itemName}s to show</h4>
			)}
			{state.loggedIn && (
				<ButtonGroup>
					<Button
						onClick={() => {
							dispatch({
								type: "showCreateItem",
								payload: {
									itemName: itemName,
									learningObjective: learningObjective,
								},
							});
						}}
					>
						<VscAdd />
					</Button>
				</ButtonGroup>
			)}
		</div>
	);
}
