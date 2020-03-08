import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context.js";
import Reviews from "../Reviews/Reviews.js";
import Circle from "../ReviewCircle/Circle.js";
import "./Restaurant.css";
import config from "../../config.js";
import { StaticGoogleMap, Marker } from "react-static-google-map";

export default class Restaurant extends React.Component {
  static contextType = AppContext;

  render() {

    // Matches prop id to restaurant ID
    const restaurant = this.context.restaurants.find(
        res => res.id === this.props.match.params.id
    );

    // Locates reviews matching prop ID
    const reviews = this.context.reviews.filter(
      rev => rev.restaurantId === this.props.match.params.id
    );

    // Turn prop into variable to further pass
    const restaurantCon = this.props.match.params.id;

    // Stringify restaurant latitude for static marker
    const lat = restaurant
      ? parseFloat(restaurant.geometry.location.lat)
      : 33.15;

    // Stringify restaurant longitude for static marker
    const lng = restaurant
      ? parseFloat(restaurant.geometry.location.lng)
      : -71.0;

    // this will iterate through the matching reviews and output the average rating of all reviews
    const rateAvg = sync => {
      let sum = 0;
      let avg = 0;
      let reviewRates = [];

      for (let i = 0; i < reviews.length; i++) {
        reviewRates.push(sync[i].rating);
        sum += sync[i].rating;
      }
      avg = sum / reviews.length;
      return reviewRates.length ? (
        <div className="circleContainer">
          <Circle rating={avg} />
        </div>
      ) : (
        <div className="circleContainer">
          <h2>Be the first to write a review</h2>
        </div>
      );
    };


    return restaurant ? (
      <main className="restaurantPage">
        <div className='staticMapContainer'>
          <StaticGoogleMap
            size="800x800"
            className="imgFluid"
            apiKey={`${config.API_KEY}`}
          >
            <Marker label="B" location={{ lat: lat, lng: lng }} />
          </StaticGoogleMap>
        </div>

        <div className="contentContainer">
          <div className="restaurantInfoContainer">
            <div className="restaurantInfo">
              <h2>{restaurant.name}</h2>
              <h4>{restaurant.vicinity}</h4>
            </div>
            <div className="resButtons">
              <button id="leaveRvwBtn">
                <Link to={`/restaurant/new-review/${restaurantCon}`}>
                  Leave Review
                </Link>
              </button>
              {rateAvg({ ...reviews })}
            </div>
          </div>

          {reviews.map((review, i) => (
            <Reviews key={i} {...review} />
          ))}
        </div>
      </main>
    ) : (
      ""
    );
  }
}
