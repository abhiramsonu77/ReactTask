import React from "react";
import Delete from "./DeleteItem";
import { Link } from "react-router-dom";

function Items(props) {
    return(
        <div className="ViewItem">
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {props.Items.map((item) => {
								return (
									<tr>
										<td>{item.id}</td>
										<td>{item.itemName}</td>
										<td>{item.itemPrice}</td>
										<td>
                                        <Link to={"/update/" + item.id}>
												<button>update</button>
											</Link>
                                        </td>
                                        <td>
                                            <Delete item={item} userList={props.userList}></Delete>
                                            </td>
									</tr>
								);
							})}
                </tbody>
            </table>
        </div>
    )
}

export default Items;