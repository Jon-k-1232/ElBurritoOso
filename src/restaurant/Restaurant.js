import React from "react"
import {Link} from "react-router-dom";
import RestaurantInfo from "../Components/restaurantInfo/restaurantInfo.js";
import Reviews from "../Components/reviews/reviews.js";
import Circle from "../Components/ReviewCircle/Circle.js";
import Map from "../Components/map/Map.js";
import "./Restaurant.css"



export default function restaurant(){




        return(
            <div className="restaurantPage">

                <div className="mapBox">
                    <Map/>
                </div>

                <RestaurantInfo/>

                <div className="circleContainer">
                    <div id="restaurantLeave">
                        <h5><Link to = "/restaurant/new-review">Leave Review</Link></h5>
                    </div>
                    <Circle/>
                </div>

                <Reviews/>
                <Reviews/>
                <Reviews/>



            </div>
        );

}