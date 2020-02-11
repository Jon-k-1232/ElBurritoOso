
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



      updateRate = (rating, restaurants) => {
        this.setState(
          {
            rating: rating,
            review: this.state.review,
            restaurantId: this.props.match.params.id,
            name: restaurants.name,
            address: restaurants.address,
            phone: restaurants.phone
          },
          () => {
            console.log({ ...this.state });
          }
        );
      };



      updateReview = (review, restaurants) => {
        this.setState(
          {
            rating: this.state.rating,
            review: review,
            restaurantId: this.props.match.params.id,
            name: restaurants.name,
            address: restaurants.address,
            phone: restaurants.phone
          },
          () => {
            console.log({ ...this.state });
          }
        );
      };



      handleSubmit = e => {
        e.preventDefault();
        this.context.setTempReview(this.state, () => {
          this.props.history.push("/restaurant/confirm-review");
        });
      };



  render() {
    const restaurant = this.context.restaurants.find(
      res => res.id === parseInt(this.props.match.params.id)
    );

    return (
      <div className="leaveReviewPage">
        <div className="restaurantInfoContainer">
          <div className="restaurantInfo">
            <h2>{restaurant.name}</h2>
            <h4>{restaurant.address}</h4>
            <h5>{restaurant.phone}</h5>
          </div>
        </div>


        <div className="scaleContainer">
          <h3>Understanding the reviews:</h3>
          <p>
            {" "}
            1.1 - 6.9 <br />I will eat it if it is free
          </p>
          <p>
            {" "}
            7.1 - 7.9 <br />I will eat it if I can walk there
          </p>
          <p>
            {" "}
            8.1 - 8.9 <br />I will drive to eat there
          </p>
          <p>
            {" "}
            9.1 - 9.9 <br />
            Life changing event (very few)
          </p>
        </div>


        <form className="newReviewForm" onSubmit={this.handleSubmit}>
          <input
            id="ratingInput"
            type="text"
            placeholder="No rookie scores... example: 8.5"
            onChange={e => this.updateRate(e.target.value, restaurant)}
            required
          />
          <input
            id="reviewComment"
            type="text"
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
