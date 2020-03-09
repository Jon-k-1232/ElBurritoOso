import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Submitted from "../Components/Submitted/Submitted.js";
import Home from "../Components/Home/Home.js";
import Confirm from "../Components/Confirm/Confirm.js";
import Search from "../Components//Search/Search.js";
import Navigation from "../Components/Navigation/Navigation.js";
import Restaurant from "../Components//Restaurant/Restaurant.js";
import Footer from "../Components/Footer/Footer.js";
import LeaveReview from "../Components/LeaveReview/LeaveReview.js";
import "./App.css";
import AppContext from "../Context";



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],  // restaurants pulled in from API
      reviews: [],     // user reviews from api database that match restaurants that rendered.
      newReviews: [],
      userLat:'',      // users latitude is stored here once api is ran
      userLng:'',      //  users longitude is stored here once api is ran
      tempReview: {},
      location:'',
      addReviews: () => {},
      setTempReview: (review, cb) => {
        this.setState({ tempReview: review }, cb);
      },
      // sets restaurant state from api search.js
      apiAddRestaurants: (apiLocations) => {
        this.setState({ restaurants: apiLocations })
      },
      // sets review state from api search.js
      apiAddReviews: (apiReviews) => {
        this.setState({ reviews: apiReviews })
      },
      // sets user latitude state from api search.js
      apiUserLat: (lat) => {
        this.setState({ userLat: lat })
      },
      // sets user longitude state from api search.js
      apiUserLng: (lng) => {
        this.setState({ userLng: lng })
      },
      //sets location state for restaurant page, needed for route
      apiLocationShare: (locationData) => {
        this.setState({ location: locationData })
      },
    };
  }




  render() {
    return (
      <AppContext.Provider value={this.state}>
        <main className="mainPage">
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route
                exact
                path="/restaurant/confirm-review"
                component={Confirm}
              />
              <Route exact path="/restaurant/:id" component={Restaurant} />
              <Route
                exact
                path="/restaurant/new-review/:id"
                component={LeaveReview}
              />
              <Route path="/reviewSubmited" component={Submitted} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </main>
      </AppContext.Provider>
    );
  }
}
