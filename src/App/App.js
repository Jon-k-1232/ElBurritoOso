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
      restaurants: [
        {
          id: 1,
          name: "Restaurant One",
          address: "123 N. Bob St. Glendale, AZ, 85308",
          phone: "623-123-4567",
          rating: "7.8"
        },
        {
          id: 2,
          name: "Restaurant Two",
          address: "321 S. Two St. Glendale, AZ, 85308",
          phone: "623-765-4321",
          rating: "8.1"
        },
        {
          id: 3,
          name: "Restaurant Three",
          address: "132 E. West St. Glendale, AZ, 85308",
          phone: "623-123-1232",
          rating: "6.7"
        }
      ],

      reviews: [
        {
          review:
            "This is a review for Restaurant One........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh " +
            "elementum imperdiet.",
          rating: "7.9",
          restaurantId: 1
        },
        {
          review:
            "This is a review for Restaurant One/one........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh " +
            "elementum imperdiet.",
          rating: "7.8",
          restaurantId: 1
        },
        {
          review:
            "This is a review1 for Restaurant Two........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh " +
            "elementum imperdiet.",
          rating: "8.1",
          restaurantId: 2
        },
        {
          review:
            "This is a review1 for Restaurant Two/two........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh " +
            "elementum imperdiet.",
          rating: "8.2",
          restaurantId: 2
        },
        {
          review:
            "This is a review for Restaurant Three........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh " +
            "elementum imperdiet.",
          rating: "6.7",
          restaurantId: 3
        },
        {
          review:
            "This is a review for Restaurant Three/three........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh " +
            "elementum imperdiet.",
          rating: "6.8",
          restaurantId: 3
        }
      ],
      newReviews: [],
      addReviews: () => {},
      tempReview: {},
      setTempReview: (review, cb) => {
        this.setState({ tempReview: review }, cb);
      }
    };
  }

  /*
  componentDidMount(){
    // call your APIs to get all reviews
    // and all restuarants
  }
  */

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
