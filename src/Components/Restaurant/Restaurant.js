import React from "react"
import {Link} from "react-router-dom";
import AppContext from "../../Context.js";
import Reviews from "../Reviews/reviews.js";
import Circle from "../ReviewCircle/Circle.js";
import "./Restaurant.css"




/*
In restaurant view it will show the user the selected restaurant, a map location with marker, as well as other user reviews.
Should the user choose to leave a review they click the leave review button.
*/




export default class restaurant extends React.Component {
    static contextType = AppContext;


    render() {
        const restaurant = this.context.restaurants.find(res=>res.id===this.props.match.params.id);
        const reviews = this.context.reviews.filter(rev=>rev.restaurantId===this.props.match.params.id);
        const restaurantCon= this.props.match.params.id;


        // this will iterate through the matching reviews and output the average rating of all reviews
        const rateAvg = (sync) => {
            let sum = 0;
            let avg = 0;
            let reviewRates = [];

                for (let i = 0; i < reviews.length; i++) {
                    reviewRates.push(sync[i].rating);
                    sum += sync[i].rating;
                }
                avg = sum / reviews.length;
                return reviewRates.length ? <div className="circleContainer"><Circle rating={avg}/></div> : <div className="circleContainer"><h2>Be the first to write a review</h2></div>
        };




        return (
            <div className="restaurantPage">

                <div className="mapBox">
                    <h1>map here</h1>
                </div>

                <div className='contentContainer'>
                    <div className="restaurantInfoContainer">
                        <div className="restaurantInfo">
                            <h2>{restaurant.name}</h2>
                            <h4>{restaurant.vicinity}</h4>
                        </div>
                        {rateAvg({...reviews})}
                    </div>


                    <div className="circleContainer">
                        <div id="restaurantLeave">
                            <h5 id="nextReview"><Link to={`/restaurant/new-review/${restaurantCon}`}>Leave Review</Link></h5>
                        </div>
                    </div>

                    {reviews.map((review,i)=><Reviews key={i} {...review}/>)}
                </div>
            </div>
        );
    }
}



/*
import Map from "../Components/Map/Map.js";
                <div className="mapBox">
                    <Map/>
                </div>
                'api key here'
 */