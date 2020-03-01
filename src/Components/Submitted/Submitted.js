
import React from "react"
import {Link} from "react-router-dom";
import "./Submitted.css"



export default function Submitted(){

    return(
        <main className="submittedPage">

            <h1 id="submitted">Review Submitted.</h1>

            <button type="submit" id="reviewSubButton">
                <Link to = "/search">Home</Link>
            </button>

        </main>
    );
}