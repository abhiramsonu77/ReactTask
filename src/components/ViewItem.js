import React from "react";
import Delete from "./DeleteItem";
import { Link } from "react-router-dom";
import "../style/style.css";

function Items(props) {
    return(
        <div>
            <div>
            <table className="viewtable">
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
												<button className="updtbtn">Update</button>
											</Link>
                                        </td>
                                        <td>
                                            <Delete item={item} itemList={props.itemList}></Delete>
                                            </td>
									</tr>
								);
							})}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Items;