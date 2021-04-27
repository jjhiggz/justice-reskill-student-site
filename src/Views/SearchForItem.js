import { useState, useEffect } from "react";
import ItemTable from "../Components/ItemTable";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "../Components/SearchForm";

const dbURL = "https://justice-reskill.herokuapp.com";

export default function SearchForItem({ itemName }) {
	const [items, setItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);

	// load resources when component mounts
	useEffect(() => {
		axios
			.get(`${dbURL}/${itemName}s`)
			.then((results) => results.data)
			.then((items) => {
				setItems(items);
				setSelectedItems(items);
			});
	}, [itemName]);

	return (
		<div id="search-form-container">
			<section className="page-content-container" as={Col} sm={2} md={3} lg="6">
				<h3 as={Row}>Search for a {itemName}</h3>
				<SearchForm
					as={Col}
					searchItems={items}
					selectedSearchItems={selectedItems}
					setSelectedSearchItems={setSelectedItems}
				/>
				<ItemTable itemName={itemName} items={selectedItems} />
			</section>
		</div>
	);
}
