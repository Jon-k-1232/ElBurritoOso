
import React from "react";
import "./HitBox.css"
import {Link} from "react-router-dom";
import Circle from "../ReviewCircle/Circle.js";


export default function HitBox(props) {



    return (
        <div className="hitItemContainer">

            <div className="contactInfo">
                <h2><Link to={`/restaurant/${props.id}`}>{props.name}</Link></h2>
                <h4><Link to={`/restaurant/${props.id}`}>{props.address}</Link></h4>
                <p><Link to={`/restaurant/${props.id}`}>{props.phone}</Link></p>
            </div>

            <div className="circleContainer">
                <Circle rating = {props.rating}/>
            </div>
        </div>
    )
}
