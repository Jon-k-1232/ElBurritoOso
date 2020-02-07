import React from "react"
import {Link} from "react-router-dom";
import AppContext from "../Context.js";
import Reviews from "../Components/Reviews/reviews.js";
import Circle from "../Components/ReviewCircle/Circle.js";
import "./Restaurant.css"



export default class restaurant extends React.Component {
    static contextType = AppContext;


    render() {
        const restaurant = this.context.restaurants.find(res=>res.id===parseInt(this.props.match.params.id));
        const reviews = this.context.reviews.filter(rev=>rev.restaurantId===parseInt(this.props.match.params.id));
        const restaurantCon= parseInt(this.props.match.params.id);


        console.log(restaurant);
        console.log(restaurantCon);
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