import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "../style/style.css";
function Update(props) {
	let history = useHistory();
	const [data, setData] = useState(null);
    const [item, setItem] = useState({
        id:'',
        itemName:'',
        itemPrice:''
    });

    function inputHandler(e) {
        setItem({...item, [e.target.name]:e.target.value})
    };

	useEffect( () => {
		async function fetchData(){
		let result = await fetch(
			"http://localhost:5000/items/" + props.match.params.id
		);

		result = await result.json();
		setData(result);
		}
		fetchData();
	}, []);
	useEffect ( () =>{
		if(data){
			setItem(data)
		}
	},[data]);
	async function updateitem(id) {
		const {itemName,itemPrice} = item;
		console.log(item);
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
		history.push("/view");
	}
	if (!data){
		return null;
	}
	return (
		<div className="home">
                <div className="box">
                    <div className="section">
						<h4>Update Item</h4>
						<form className="inputform">
            <input 
                    type = "text" 
                    name ="itemName"
                    placeholder = "itemname" 
                    defaultValue = {data.itemName} 
					value = {item.itemName} 
                    onChange={inputHandler}
					className="input"
                    />

                    <input 
                    type = "text" 
                    name ="itemPrice"
                    placeholder = "item price" 
                    defaultValue = {data.itemPrice} 
					value = {item.itemPrice}
                    onChange = {inputHandler}
					className="input"
                    />
			<button onClick={() => updateitem(data.id)} className="addbtn">Update</button>
				</form>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Update);