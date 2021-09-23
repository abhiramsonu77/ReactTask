import react from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

function homeButton(){
    return(
        <div className="home">
            <div className="box">
                <div className="section">
                    What do you want to Do?
                    <Link to={"/add"}><button className="addbtn">Add New Item</button></Link>
                    <Link to={"/view"}><button className="viewbtn">View all Items</button></Link>
                </div>
                </div>
        </div>
    )
}

export default homeButton;