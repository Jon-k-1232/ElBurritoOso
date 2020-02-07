

import React from "react"
import '../Reviews/reviews.css'
import Circle from "../ReviewCircle/Circle.js";


export default function Reviews(props) {

    return (
        <div className="reviewContainer">
            <div>
                <p>{props.review}</p>
            </div>

            <div className="reviewsCircle">
                <Circle rating={props.rating}/>
            </div>
        </div>
    );

}