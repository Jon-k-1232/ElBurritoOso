import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context.js";
import Reviews from "../Reviews/reviews.js";
import Circle from "../ReviewCircle/Circle.js";
import "./Restaurant.css";
import config from "../../config.js";
import { StaticGoogleMap, Marker } from "react-static-google-map";

export default class Restaurant extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      restaurant:'',
      reviews:'',
    };
  }


/*
Needed for a route to be shared for a specific restaurant. this.props.match.params.id is the restaurant place id and
gets passed to the backend to run a place detail query against google, and app DB. This returns the restaurants
demographics, as well as any reviews in the apps db.
 */
componentDidMount() {
  fetch(`${config.API_ENDPOINT_REST}/${this.props.match.params.id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${config.API_KEY2}`,
      Origin: `${config.FRONT_WEB}`,
    }
  })
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        return resp.json();
      })
      .then(data => {
        this.setState({reviews:data.reviews});
        this.setState({restaurant:data.results});
        this.context.apiLocationShare(data.results);
      })
      .catch(error => {
        alert(error);
      });
}


  render() {

    // Matches prop id to restaurant ID
    const restaurant = this.state.restaurant;

    // Locates reviews matching prop ID
    const reviews = this.state.reviews;

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

    /*
     reviewDisplay runs after component will mount. this reads the updated state for reviews. If there is a review, or multiple
     reviews, this will iterate through the array, and print the review details with score.
     */
    const reviewDisplay =(stateReview)=>{
      let arr = stateReview;
      let reviewHits = [];
     for (let i = 0; i < arr.length; i++) {
        reviewHits.push(
          <Reviews key={i} {...arr[i]}/>
        )
     }
      return reviewHits
    };

    return restaurant ?(
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
                    <h4>{restaurant.formatted_address}</h4>
            </div>
            <div className="resButtons">
                {rateAvg({ ...reviews })}
                <button id="leaveRvwBtn">
                    <Link to={`/restaurant/new-review/${restaurantCon}`}>
                    Leave Review
                    </Link>
                </button>
            </div>
          </div>
          {reviewDisplay(this.state.reviews)}
        </div>
      </main>
    ) : (
        ""
    );
  }
}







