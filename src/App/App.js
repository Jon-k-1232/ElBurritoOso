import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import submitted from "../Components/Submitted/submitted.js";
import home from "../Components/Home/Home.js";
import confirm from "../Components/Confirm/Confirm.js";
import search from "../Components//Search/Search.js";
import Navigation from "../Components/Navigation/Navigation.js";
import restaurant from "../Components//Restaurant/Restaurant.js";
import Footer from "../Components/Footer/Footer.js";
import leaveReview from "../Components/LeaveReview/leaveReview.js";
import "./App.css";

import AppContext from "../Context";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],// restaurants pulled in from API
      reviews: [],// user reviews from api database that match restaurants that rendered.
      newReviews: [],
      userLat:'',
      userLng:'',
      addReviews: () => {},
      tempReview: {},
      setTempReview: (review, cb) => {
        this.setState({ tempReview: review }, cb);
      },
      apiAddRestaurants: (apiLocations) => {
        this.setState({ restaurants: apiLocations }) // sets restaurant state from api search.js
      },
      apiAddReviews: (apiReviews) => {
        this.setState({ reviews: apiReviews }) // sets review state from api search.js
      },
      apiUserLat: (lat) => {
        this.setState({ userLat: lat }) // sets user latitude state from api search.js
      },
      apiUserLng: (lng) => {
        this.setState({ userLng: lng }) // sets user longitude state from api search.js
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
              <Route exact path="/" component={home} />
              <Route path="/search" component={search} />
              <Route
                exact
                path="/restaurant/confirm-review"
                component={confirm}
              />
              <Route exact path="/restaurant/:id" component={restaurant} />

              <Route
                exact
                path="/restaurant/new-review/:id"
                component={leaveReview}
              />
              <Route path="/reviewSubmited" component={submitted} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </main>
      </AppContext.Provider>
    );
  }
}
