import React from "react";
import "../Reviews/reviews.css";
import Circle from "../ReviewCircle/Circle.js";

//------------------  Generates user review text, calls the review circle  ------------------\\

export default function Reviews(props) {
  return (
    <div className="reviewContainer">
      <div className="reviewText">
        <p>{props.review}</p>
      </div>

      <div className="reviewsCircle">
        <Circle rating={props.rating} />
      </div>
    </div>
  );
}
