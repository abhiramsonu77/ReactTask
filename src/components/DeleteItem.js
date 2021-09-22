import React from "react";

function Delete(props) {
    
	function deleteItem(id) {
		fetch(`http://localhost:5000/items/${id}`, {
			method: "DELETE",
		}).then((result) => {
			props.itemList();
			result.json().then((resp) => {
				console.log(resp);
			});
		});
	}
	return (
		<div>
			<button onClick={() => deleteItem(props.item.id)}>Delete</button>
		</div>
	);
}

export default Delete;