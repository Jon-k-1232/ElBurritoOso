
import React from "react"
import {Link} from "react-router-dom";
import './leaveReview.css'
import AppContext from "../Context.js";


export default class leaveReview extends React.Component {
    static contextType = AppContext;


    render() {
        const restaurant = this.context.restaurants.find(res=>res.id===parseInt(this.props.match.params.id));
        const restaurantCon= parseInt(this.props.match.params.id);
        console.log(restaurant)

        return (
            <div className="leaveReviewPage">
                <div className="restaurantInfoContainer">
                    <div className="restaurantInfo">
                        <h2>{restaurant.name}</h2>
                        <h4>{restaurant.address}</h4>
                        <h5>{restaurant.phone}</h5>
                    </div>
                </div>


                <div className="scaleContainer">
                    <h3>Understanding the reviews:</h3>
                    <p> 1.1 - 6.9 <br/>I will eat it if it is free</p>
                    <p> 7.1 - 7.9 <br/>I will eat it if I can walk there</p>
                    <p> 8.1 - 8.9 <br/>I will drive to eat there</p>
                    <p> 9.1 - 9.9 <br/>Life changing event (very few)</p>
                </div>

                <form className="newReviewForm">
                    <input id="ratingInput" type="integer" placeholder="No rookie scores... example: 8.5"/>
                    <input id="reviewComment" type="text" placeholder="Write a review..."/>
                    <button type="submit" id="reviewSubButton"><Link to={`/restaurant/new-review/confirm/${restaurantCon}`}>Submit</Link>
                    </button>
                </form>

            </div>
        );
    }
}