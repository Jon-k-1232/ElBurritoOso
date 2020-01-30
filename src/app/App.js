

import React from 'react';
import {Route} from 'react-router-dom';
import home from "../home/Home.js";
import review from "../review/Review.js";
import search from "../search/Search.js";
import Navigation from "../navigation/Navigation.js";
import restaurant from "../restaurant/Restaurant.js";
import Footer from "../Footer/Footer.js";
import leaveReview from "../leaveReview/leaveReview.js";
import './App.css'






export default class App extends React.Component{



  render() {
    return (
            <main className="mainPage">
                <Navigation/>
                    <Route exact path= "/" component = {home} />
                    <Route path = "/search" component = {search} />
                    <Route path = "/review" component = {review} />
                    <Route exact path = "/review/new" component = {leaveReview}/>
                    <Route path = "/restaurant" component = {restaurant}/>

                <Footer/>
            </main>
    );
  }
}

