import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../config.js";
import Circle from "../ReviewCircle/Circle.js";
import "./Search.css";
import AppContext from "../../Context.js";
import Maps from "../Map/Map.js";

export default class Search extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      address: [],
      loading: true,
    };
  }



  // Call to backend to get restaurants and user reviews
  fetchRestaurants = e => {
    e.preventDefault();
    let location = this.state.address;

    fetch(`${config.API_ENDPOINT_DATA}/${location}`, {
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
          this.context.apiAddRestaurants(data.results); // sets google restaurants to context
          this.context.apiAddReviews(data.reviews); // sets reviews, scores from DB to context
          this.context.apiUserLat(
              data.userLatLong.results[0].geometry.location.lat
          ); // sets latitude of address user typed in
          this.context.apiUserLng(
              data.userLatLong.results[0].geometry.location.lng
          ); // sets longitude of address user typed in
          this.setState({loading: false}); // set this in order to cause re render for development only.
      })
      .catch(error => {
        alert(error);
      });
  };



  // Setting state to cause a re render
  addressUpdate = userAddress => {
    this.setState({
      address: userAddress
    });
  };




  render() {
    let arr = this.context.restaurants;
    let searchHits = [];
    let reviewSearch = this.context.reviews;

    // this will make a search result list for each hit returned from search.
    for (let i = 0; i < arr.length; i++) {

      // sync equals place_id
      const rateFinder = syncId => {
        let sum = 0;
        let avg = 0;
        let reviewRate = [];

        // finds the length of data base returned reviews
        for (let i = 0; i < reviewSearch.length; i++) {

          // compares the google place id to Database review place id
          if (syncId === reviewSearch[i].restaurantId) {

            reviewRate.push(reviewSearch[i].rating);

            // adds the integers together
            sum += reviewSearch[i].rating;
          }
        }
        // divides sum by total
        avg = sum / reviewRate.length;
        return reviewRate.length ? (
          <div className="circleContainer">
            <Circle rating={avg} />
          </div>
        ) : (
          <div className="circleContainer">
            <h3>Be the first to write a review</h3>
          </div>
        );
      };

      searchHits.push(
        // iterates a new restaurant info for each hit.
        <div className="hitItemContainer" key={i}>
          <div className="contactInfo">
            <h2>
              <Link to={`/restaurant/${this.context.restaurants[i].place_id}`}>
                {this.context.restaurants[i].name}
              </Link>
            </h2>
            <h4>
              <Link to={`/restaurant/${this.context.restaurants[i].place_id}`}>
                {this.context.restaurants[i].vicinity}
              </Link>
            </h4>
          </div>

          <div className="circleContainer">
            {rateFinder(this.context.restaurants[i].place_id)}
          </div>
        </div>
      );
    }



    // conditional rendering for map. Once at least 1 search result is found, map will populate on search screen.
    const displayMap = () => {
      if (arr.length >= 1) {
        return (
          <div className="mapBox">
            <Maps/>
          </div>
        );
      }
    };


    return (
      <main className="searchPage">
        <div>
          <h1 id="pageTitle">Discover Restaurants</h1>
        </div>

        <div>
          <form className="searchForm" onSubmit={this.fetchRestaurants}>
            <input
              id="searchInput"
              type="text"
              placeholder="input your address..."
              onChange={e => this.addressUpdate(e.target.value)}
            />
            <button type="submit" id="searchButton">
              Search
            </button>
          </form>
        </div>

        <div className="gradingScale">
          <h2>Understanding the reviews:</h2>
          <p>
            <span> 1.1 - 6.9 </span>
            <br />I will eat it if it's free
          </p>
          <p>
            <span> 7.1 - 7.9 </span>
            <br />I will eat it if I can walk there
          </p>
          <p>
            <span> 8.1 - 8.9 </span>
            <br />I will drive to eat there
          </p>
          <p>
            <span> 9.1 - 9.9 </span>
            <br />
            Life changing event (very few)
          </p>
        </div>

        {displayMap()}

        <div className="hitsContainer">{searchHits}</div>
      </main>
    );
  }
}
