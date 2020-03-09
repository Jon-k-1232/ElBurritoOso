import React from "react";
import { Link } from "react-router-dom";
import "./Submitted.css";

export default function Submitted() {
  //end page, select home to got home.
  return (
    <main className="submittedPage">
      <h1 id="submitted">Review Submitted.</h1>

      <button type="submit" id="reviewSubButton">
        <Link to="/search">Home</Link>
      </button>
    </main>
  );
}
