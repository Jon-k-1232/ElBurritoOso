
import React from "react"
import {Link} from "react-router-dom";
import AppContext from "../Context.js";
import './Confirm.css'


export default class leaveReview extends React.Component {

    static contextType = AppContext;

    render() {

        const restaurant = this.context.restaurants.find(res=>res.id===parseInt(this.props.match.params.id));
        const restaurantCon= parseInt(this.props.match.params.id);


        return (
            <div className="confirmReviewPage">


                    <div className="restaurantInfoContainer">
                        <div className="restaurantInfo">
                            <h2>{restaurant.name}</h2>
                            <h4>{restaurant.address}</h4>
                            <h5>{restaurant.phone}</h5>
                        </div>
                    </div>

                <div className="confirmRating">
                    <h3>Rating:</h3>
                    <p>Rating</p>
                </div>

                <div className="confirmReview">
                    <h3>Review:</h3>
                    <p> review statement Review statement Here</p>
                </div>

                <div className="confirmButtons">
                    <button type="submit" id="reviewSubButton">
                        <Link to={`/restaurant/new-review/${restaurantCon}`}>back</Link>
                    </button>

                    <button type="submit" id="reviewSubButton">
                        <Link to="/reviewSubmited">confirm</Link>
                    </button>
                </div>

            </div>
        );
    }
}