import React from "react";
import "../style/style.css";

function Delete(props) {
    
	function deleteItem(id) {
		fetch(`https://abhiram-api-rest.herokuapp.com/items/${id}`, {
			method: "DELETE",
		}).then((result) => {
			console.log(props.itemList);
			props.itemList();
			result.json().then((resp) => {
				console.log(resp);
			});
		});
	}
	return (
		<div>
			<button onClick={() => deleteItem(props.item.id)} className="dltbtn">Delete</button>
		</div>
	);
}

export default Delete;