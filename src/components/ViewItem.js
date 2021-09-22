import React from "react";
function Items(props) {
    return(
        <div className="ViewItem">
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                {props.Items.map((item) => {
								return (
									<tr>
										<td>{item.id}</td>
										<td>{item.itemName}</td>
										<td>{item.itemPrice}</td>
										
									</tr>
								);
							})}
                </tbody>
            </table>
        </div>
    )
}

export default Items;