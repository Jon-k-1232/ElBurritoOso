
import React from "react"
import {Link} from "react-router-dom";
import AppContext from "../../Context.js";
import './Confirm.css'


/*
Once backend in place submit button will post update context array (newReviews) to backend. On return of status 200,
confirm screen will be passed will state either review submitted or error.
 */



export default class confirm extends React.Component {

    static contextType = AppContext;



    render() {

        const restaurant = this.context.restaurants.find(res=>res.id===parseInt(this.props.match.params.id));
        const restaurantCon= parseInt(this.props.match.params.id);

        console.log(this.props)

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
                    <p>{this.context.reviews.rating} (rating goes here)</p>
                </div>

                <div className="confirmReview">
                    <h3>Review:</h3>
                    <p>{this.context.reviews.review}(review statement goes here.)</p>
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