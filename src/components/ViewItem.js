import React , { useEffect, useState } from "react";
import axios from "axios";
function ViewItem() {
        const [state, setState] = useState([]);
        useEffect(() => {
            axios.get("http://localhost:5000/item").then((res) => {
                setState(res.data);
                console.log(res.data);
            });
        }, []);
    return(
        <div className="ViewItem">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                <tr>
                {state.map((item) => {
							return (
								<tr>
									<td>{item.itemId}</td>
									<td>{item.itemName}</td>
									<td>{item.itemPrice}</td>
								</tr>
							);
						})}
                </tr>
            </table>
        </div>
    )
}

export default ViewItem;