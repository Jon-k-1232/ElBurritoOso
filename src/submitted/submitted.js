

import React from "react"
import {Link} from "react-router-dom";
import "./submitted.css"




export default function submitted(){

    return(
        <div className="submittedPage">

            <h1 id="submitted">Review Submitted.</h1>

            <button type="submit" id="reviewSubButton">
                <Link to = "/">Home</Link>
            </button>

        </div>
    );

}