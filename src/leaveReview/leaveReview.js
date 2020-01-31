
import React from "react"
import {Link} from "react-router-dom";
import RestaurantInfo from "../Components/restaurantInfo/restaurantInfo.js";
import './leaveReview.css'


export default function leaveReview(){

    return(
        <div className="leaveReviewPage">
            <RestaurantInfo/>


            <div className="scaleContainer">
                <h3>Understanding reviews:</h3>
                <p> 1.1 - 6.9 <br/>I will eat it if it is free</p>
                <p> 7.1 - 7.9 <br/>I will eat it if I can walk there</p>
                <p> 8.1 - 8.9 <br/>I will drive to eat there</p>
                <p> 9.1 - 9.9 <br/>Life changing event (very few)</p>
            </div>

            <form className="newReviewForm">
                <input id="ratingInput" type="integer" placeholder="No rookie scores... example: 8.5" value=""/>
                <input id="reviewComment" type="text" placeholder="Write a review..." value=""/>
                <button type="submit" id="reviewSubButton"><Link to = "/restaurant/new-review/confirm">Submit</Link></button>
            </form>

        </div>
    );
}