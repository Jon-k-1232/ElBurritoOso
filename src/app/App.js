

import React from 'react';
import {Route} from 'react-router-dom';
import submitted from "../submitted/submitted.js";
import home from "../home/Home.js";
import confirm from "../confirm/Confirm.js";
import search from "../search/Search.js";
import Navigation from "../Components/navigation/Navigation.js";
import restaurant from "../restaurant/Restaurant.js";
import Footer from "../Components/Footer/Footer.js";
import leaveReview from "../leaveReview/leaveReview.js";
import './App.css'






export default class App extends React.Component{



  render() {
    return (
            <main className="mainPage">
                <Navigation/>
                    <Route exact path= "/" component = {home} />
                    <Route path = "/search" component = {search} />
                    <Route exact path = "/restaurant" component = {restaurant}/>
                    <Route exact path = "/restaurant/new-review" component = {leaveReview}/>
                    <Route exact path = "/restaurant/new-review/confirm" component = {confirm} />
                    <Route exact path = "/reviewSubmited" component = {submitted} />
                <Footer/>
            </main>
    );
  }
}

