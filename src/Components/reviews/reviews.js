
import React from "react"
import '../Reviews/reviews.css'
import Circle from "../ReviewCircle/Circle.js";



export default function Reviews(props) {

    // generates user review text and the review circle. This displays on the selected restaurant page
    return (
        <div className="reviewContainer">
            <div className='reviewText'>
                <p>{props.review}</p>
            </div>

            <div className="reviewsCircle">
                <Circle rating={props.rating}/>
            </div>
        </div>
    );

}