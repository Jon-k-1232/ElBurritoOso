import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context";
import config from "../../config.js";
import "./Confirm.css";

export default class Confirm extends React.Component {
  static contextType = AppContext;

  addReviewRequest = tempReview => {
    const newReview = {
      restaurantId: `${tempReview.restaurantId}`,
      review: `${tempReview.review}`,
      rating: `${tempReview.rating}`
    };

    // Post request to send data back to backend
    fetch(`${config.API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_KEY2}`,
        Origin: `${config.FRONT_WEB}`
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .catch(error => alert(error));

    // sets context restaurants back to 0
    this.context.apiAddRestaurants([]);
  };

  render() {
    const { tempReview } = this.context;

    return tempReview ? (
      <main className="confirmReviewPage">
        <div className="restaurantInfoContainer">
          <div className="restaurantInfo">
            <h2>{tempReview.name}</h2>
            <h4>{tempReview.vicinity}</h4>
          </div>
        </div>

        <div className="confirmRating">
          <h2>Rating:</h2>
          <p>{tempReview.rating}</p>
        </div>

        <div className="confirmReview">
          <h2>Review:</h2>
          <p>{tempReview.review}</p>
        </div>

        <div className="confirmButtons">
          <button type="submit" id="reviewSubButton">
            <Link to={`/restaurant/new-review/${tempReview.restaurantId}`}>
              back
            </Link>
          </button>

          <button
            type="submit"
            id="reviewSubButton"
            onClick={e => this.addReviewRequest(tempReview)}
          >
            <Link to="/reviewSubmited">confirm</Link>
          </button>
        </div>
      </main>
    ) : (
      <div className="notFound">
        <h2>Please start a new search to find only the best burritos.</h2>
      </div>
    );
  }
}
