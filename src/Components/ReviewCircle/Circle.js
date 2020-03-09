import React from "react";
import "../ReviewCircle/Circle.css";

export default function Circle(props) {
  //renders the circle for review scores
  return props.rating ? (
    <div className="reviewCircle">
      <h2 id="circleScore">{props.rating.toFixed(1)}</h2>
    </div>
  ) : (
    ""
  );
}
