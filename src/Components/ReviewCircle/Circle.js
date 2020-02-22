
import React from "react"
import '../ReviewCircle/Circle.css'


export default function Circle(props) {

    return (
        <div className="reviewCircle">
            <h2 id="circleScore">{props.rating.toFixed(1)}</h2>
        </div>
    );

}