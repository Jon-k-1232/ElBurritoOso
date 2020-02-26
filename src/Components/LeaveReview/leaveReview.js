
import React from "react";
import "./leaveReview.css";
import AppContext from "../../Context.js";

/*
leave review allows the user to input the review statement, a score, then store to the context newReview array.
 */

export default class leaveReview extends React.Component {
  static contextType = AppContext;

      constructor(props) {
        super(props);
        this.state = {
          review: "",
          rating: "",
          restaurantId: this.props.match.params.id,
          name: "",
          address: "",
          phone: ""
        };
      }



        // Updates state with rating score. States gets passed to next screen for user to confirm
      updateRate = (rating, restaurants) => {
        this.setState(
          {
            rating: rating,
            review: this.state.review,
            restaurantId: this.props.match.params.id,
            name: restaurants.name,
            address: restaurants.address,
            phone: restaurants.phone
          }
        );
      };



        // Updates state with user review text. States gets passed to next screen for user to confirm
      updateReview = (review, restaurants) => {
        this.setState(
          {
            rating: this.state.rating,
            review: review,
            restaurantId: this.props.match.params.id,
            name: restaurants.name,
            address: restaurants.address,
            phone: restaurants.phone
          }
        );
      };



        // Passes state to next route, confirm review page.
      handleSubmit = (e) => {
        e.preventDefault();
        this.context.setTempReview(this.state, () => {
          this.props.history.push("/restaurant/confirm-review");
        });
      };



  render() {
    const restaurant = this.context.restaurants.find(res => res.id === this.props.match.params.id);

    return (
      <div className="leaveReviewPage">

            <div className="restaurantInfoContainer">
              <div className="restaurantInfo">
                <h2>{restaurant.name}</h2>
                <h4>{restaurant.vicinity}</h4>
              </div>
            </div>


          <div className="scaleContainer">
              <h2>Understanding the reviews:</h2>
              <p><span> 1.1 - 6.9 </span><br/>I will eat it if it's free</p>
              <p><span> 7.1 - 7.9 </span><br/>I will eat it if I can walk there</p>
              <p><span> 8.1 - 8.9 </span><br/>I will drive to eat there</p>
              <p><span> 9.1 - 9.9 </span><br/>Life changing event (very few)</p>
          </div>


            <form className="newReviewForm" onSubmit={this.handleSubmit}>

                <p>Give it a score.</p>
                <input
                id="ratingInput"
                type="number"
                step="0.1"
                min="0.1"
                max="9.9"
                placeholder="No rookie scores. ex: 8.5"
                onChange={e => this.updateRate(e.target.value, restaurant)}
                required
              />
                <p>Tell us what you think.</p>
              <textarea
                id="reviewComment"
                type="text"
                wrap="soft"
                placeholder="Write a review..."
                onChange={e => this.updateReview(e.target.value, restaurant)}
                required
              />
              <button type="submit" id="reviewSubButton">
                Submit
              </button>
        </form>
      </div>
    );
  }
}
