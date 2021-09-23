import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "../style/style.css";
function AddItem() {
    let history = useHistory();
    const [item, setItem] = useState({
        id:'',
        itemName:'',
        itemPrice:''
    });

    function inputHandler(e) {
        setItem({...item, [e.target.name]:e.target.value})
    };
    function submitHandler(e){
        e.preventDefault();
        const {
            id,
            itemName,
            itemPrice
        } = item
        console.log(item);
        axios.post("http://localhost:5000/items",item)
            .then (response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })

    };
        return (
            <div className="home">
                <div className="box">
                    <div className="section">
                        <h4>Add Item</h4>
                <form onSubmit={submitHandler} className="inputform">
                    <input 
                    type = "text" 
                    name ="id"
                    placeholder = "item id" 
                    value = {item.id} 
                    onChange={inputHandler} 
                    className="input"
                    />

                    <input 
                    type = "text" 
                    name ="itemName"
                    placeholder = "itemname" 
                    value = {item.itemName} 
                    onChange={inputHandler}
                    className="input"
                    />

                    <input 
                    type = "text" 
                    name ="itemPrice"
                    placeholder = "item price" 
                    value = {item.itemPrice} 
                    onChange = {inputHandler}
                    className="input"
                    />

                    <button type= "submit" className="addbtn">Submit</button>
                </form>
                
                    </div>
                    <div className="xtra">
                View Items <button
						className="viewbtn"
						onClick={() => {
							history.push("/view");
						}}>
						Items 
					</button>
                    </div>
                </div>
            </div>
        )
}

export default AddItem