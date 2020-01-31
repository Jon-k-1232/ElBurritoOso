
import React from "react"
import {Link} from "react-router-dom";
import RestaurantInfo from "../Components/restaurantInfo/restaurantInfo.js";
import './Confirm.css'


export default function leaveReview(){

    return(
        <div className="confirmReviewPage">
            <RestaurantInfo/>

            <div className="confirmRating">
                <h3>Rating:</h3>
                <p>rating goes here.</p>
            </div>

            <div className="confirmReview">
                <h3>Review:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                    cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                    ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
                    arcu eget nulla.
                </p>
            </div>

            <div className="confirmButtons">
                <button type="submit" id="reviewSubButton">
                    <Link to = "/restaurant/new-review">back</Link>
                </button>

                <button type="submit" id="reviewSubButton">
                    <Link to = "/reviewSubmited">confirm</Link>
                </button>
            </div>

        </div>
    );
}