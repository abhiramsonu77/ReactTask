import React, {useState} from "react";
import axios from "axios";

function AddItem() {

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
            <div>
                <form onSubmit={submitHandler}>
                    <input 
                    type = "text" 
                    name ="id"
                    placeholder = "item id" 
                    value = {item.id} 
                    onChange={inputHandler} 
                    />

                    <input 
                    type = "text" 
                    name ="itemName"
                    placeholder = "itemname" 
                    value = {item.itemName} 
                    onChange={inputHandler}
                    />

                    <input 
                    type = "text" 
                    name ="itemPrice"
                    placeholder = "item price" 
                    value = {item.itemPrice} 
                    onChange = {inputHandler}
                    />

                    <button type= "submit">Submit</button>
                </form>
            </div>
        )
}

export default AddItem