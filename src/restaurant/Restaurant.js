import React from "react"
import {Link} from "react-router-dom";
import AppContext from "../Context.js";
import Reviews from "../Components/Reviews/reviews.js";
import Circle from "../Components/ReviewCircle/Circle.js";
import "./Restaurant.css"




/*
In restaurant view it will show the user the selected restaurant, a map location with marker, as well as other user reviews.
Should the user choose to leave a review they click the leave review button.
*/




export default class restaurant extends React.Component {
    static contextType = AppContext;


    render() {
        const restaurant = this.context.restaurants.find(res=>res.id===parseInt(this.props.match.params.id));
        const reviews = this.context.reviews.filter(rev=>rev.restaurantId===parseInt(this.props.match.params.id));
        const restaurantCon= parseInt(this.props.match.params.id);



        return (
            <div className="restaurantPage">

                <div className="mapBox">
                    <h1>map here</h1>
                </div>


                    <div className="restaurantInfo">
                        <h2>{restaurant.name}</h2>
                        <h4>{restaurant.address}</h4>
                        <h5>{restaurant.phone}</h5>
                    </div>



                <div className="circleContainer">
                    <div id="restaurantLeave">
                        <h5><Link to={`/restaurant/new-review/${restaurantCon}`}>Leave Review</Link></h5>
                    </div>
                    <Circle rating={restaurant.rating}/>
                </div>

                {reviews.map((review,i)=><Reviews key={i} {...review}/>)}

            </div>
        );
    }
}



/*
import Map from "../Components/Map/Map.js";
                <div className="mapBox">
                    <Map/>
                </div>
                'AIzaSyB3NE69ANz_b5ciRwN0D8PalZYy353pqS4'
 */