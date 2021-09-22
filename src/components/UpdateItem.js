import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
function Update(props) {
	const [data, setData] = useState([]);
    const [item, setItem] = useState({
        id:'',
        itemName:'',
        itemPrice:''
    });

    function inputHandler(e) {
        setItem({...item, [e.target.name]:e.target.value})
    };

	useEffect(async () => {
		let result = await fetch(
			"http://localhost:5000/items/" + props.match.params.id
		);

		result = await result.json();
		setData(result);
	}, []);

	async function updateitem(id) {
		const {itemName,itemPrice} = item;
		const response = await fetch(`http://localhost:5000/items/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				itemName,
                itemPrice
			}),
		});
	}
	return (
		<div>
            <input 
                    type = "text" 
                    name ="itemName"
                    placeholder = "itemname" 
                    value = {data.itemName} 
                    onChange={inputHandler}
                    />

                    <input 
                    type = "text" 
                    name ="itemPrice"
                    placeholder = "item price" 
                    value = {data.itemPrice} 
                    onChange = {inputHandler}
                    />
			<button onClick={() => updateitem(data.id)}>Update</button>
		</div>
	);
}

export default withRouter(Update);