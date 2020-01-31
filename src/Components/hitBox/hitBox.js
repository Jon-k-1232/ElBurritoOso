
import React from "react";
import '../hitBox/hitBox.css'
import {Link} from "react-router-dom";
import Circle from "../ReviewCircle/Circle.js";


export default function HitBox() {

        return (
            <div className="hitItemContainer">

                        <div className="contactInfo">
                            <h2><Link to = "/restaurant"> Restaurant Name</Link></h2>
                            <h4><Link to = "/restaurant"> Restaurant Address</Link></h4>
                            <p>Phone</p>
                        </div>

                    <div className="circleContainer">
                         <Circle/>
                    </div>
            </div>
        );

}

