import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context";

import "./Confirm.css";

/*
Once backend in place submit button will post update context array (newReviews) to backend. On return of status 200,
confirm screen will be passed will state either review submitted or error.
 */

export default class confirm extends React.Component {
  /*
    reviewSend = (userData) =>{
        // api push to backend

    }
    */

  static contextType = AppContext;

  render() {
    const { tempReview } = this.context;
    return (
      <div className="confirmReviewPage">
        <div className="restaurantInfoContainer">
          <div className="restaurantInfo">
            <h2>{tempReview.name}</h2>
            <h4>{tempReview.address}</h4>
            <h5>{tempReview.phone}</h5>
          </div>
        </div>

        <div className="confirmRating">
          <h3>Rating:</h3>
          <p>{tempReview.rating} (rating goes here)</p>
        </div>

        <div className="confirmReview">
          <h3>Review:</h3>
          <p>{tempReview.review}(review statement goes here.)</p>
        </div>

        <div className="confirmButtons">
          <button type="submit" id="reviewSubButton">
            <Link to={`/restaurant/new-review/${tempReview.restaurantId}`}>
              back
            </Link>
          </button>

          <button type="submit" id="reviewSubButton">
            <Link to="/reviewSubmited" onClick={() => {}}>
              confirm
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

/*

<div className="confirmButtons">
    <button type="submit" id="reviewSubButton">
        <Link to={`/restaurant/new-review/${restaurantCon}`}>back</Link>
    </button>

    <button type="submit" id="reviewSubButton">
        <Link to="/reviewSubmited">confirm</Link>
    </button>
</div>


 */
