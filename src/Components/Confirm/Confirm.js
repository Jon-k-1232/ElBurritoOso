import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context";
import config from "../../config.js"
import "./Confirm.css";

/*
Once backend in place submit button will post update context array (newReviews) to backend. On return of status 200,
confirm screen will be passed will state either review submitted or error.
 */

export default class confirm extends React.Component {

    static contextType = AppContext;



    addReviewRequest = (tempReview) => {
        const newReview = {
            restaurantId: `${tempReview.restaurantId}`,
            review: `${tempReview.review}`,
            rating: `${tempReview.rating}`,
        };

        console.log(newReview)


        fetch(`${config.API_ENDPOINT}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .catch(error => alert(error))

    };





  render() {
    const { tempReview } = this.context;
    return (
      <div className="confirmReviewPage">
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

          <button type="submit" id="reviewSubButton" onClick={e => this.addReviewRequest(tempReview)}>
            <Link to="/reviewSubmited">
              confirm
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

