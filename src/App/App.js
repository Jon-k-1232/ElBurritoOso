

import React from 'react';
import {Route} from 'react-router-dom';
import submitted from "../Submitted/submitted.js";
import home from "../Home/Home.js";
import confirm from "../Confirm/Confirm.js";
import search from "../Search/Search.js";
import Navigation from "../Components/Navigation/Navigation.js";
import restaurant from "../Restaurant/Restaurant.js";
import Footer from "../Components/Footer/Footer.js";
import leaveReview from "../LeaveReview/leaveReview.js";
import './App.css'








export default class App extends React.Component{



  render() {
    return (
            <main className="mainPage">
                <Navigation/>
                    <Route exact path= "/" component = {home} />
                    <Route path = "/search" component = {search} />
                    <Route exact path = "/restaurant/:id" component = {restaurant}/>
                    <Route exact path = "/restaurant/new-review/:id" component = {leaveReview}/>
                    <Route path = "/restaurant/new-review/confirm/:id" component = {confirm} />
                    <Route path = "/reviewSubmited" component = {submitted}/>
                <Footer/>
            </main>
    );
  }
}







/*
export default class App extends React.Component{



  render() {
    return (
            <main className="mainPage">
                <Navigation/>
                    <Route exact path= "/" component = {home} />
                    <Route path = "/search" component = {search} />
                    <Route exact path = "/restaurant/:id" component = {restaurant}/>
                    <Route exact path = "/restaurant/new-review" component = {leaveReview}/>
                    <Route path = "/restaurant/new-review/confirm" component = {confirm} />
                    <Route path = "/reviewSubmited" component = {submitted} />
                <Footer/>
            </main>
    );
  }
}
 */

