import React, { Component } from "react";
import axios from "axios";

class AddItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            itemId:'',
            itemName:'',
            itemPrice:''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state);
        axios.post("http://localhost:5000/item",this.state)
            .then (response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render() {
        const {itemId, itemName, itemPrice} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                    type = "text" 
                    name ="itemId"
                    placeholder = "item id" 
                    value = {itemId} 
                    onChange={this.inputHandler} 
                    />

                    <input 
                    type = "text" 
                    name ="itemName"
                    placeholder = "itemname" 
                    value = {itemName} 
                    onChange={this.inputHandler}
                    />

                    <input 
                    type = "text" 
                    name ="itemPrice"
                    placeholder = "item price" 
                    value = {itemPrice} 
                    onChange = {this.inputHandler}
                    />

                    <button type= "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddItem