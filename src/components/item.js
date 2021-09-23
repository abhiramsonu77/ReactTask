import React, { useEffect, useState } from "react";
import axios from "axios";
import Items from "./ViewItem";

function ItemList() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		itemList();
	}, []);
	function itemList() {
		axios
			.get("https://abhiram-api-rest.herokuapp.com/items")
			.then((result) => {
				setItems(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return <Items Items={items} itemList={itemList}></Items>;
}

export default ItemList;