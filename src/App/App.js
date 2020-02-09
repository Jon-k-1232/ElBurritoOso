

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import submitted from "../Components/Submitted/submitted.js";
import home from "../Components/Home/Home.js";
import confirm from "../Components/Confirm/Confirm.js";
import search from "../Search/Search.js";
import Navigation from "../Components/Navigation/Navigation.js";
import restaurant from "../Restaurant/Restaurant.js";
import Footer from "../Components/Footer/Footer.js";
import leaveReview from "../Components/LeaveReview/leaveReview.js";
import './App.css'








export default class App extends React.Component{



  render() {
    return (
            <main className="mainPage">
                <BrowserRouter>
                    <Navigation/>
                        <Route exact path= "/" component = {home} />
                        <Route path = "/search" component = {search} />
                        <Route exact path = "/restaurant/:id" component = {restaurant}/>
                        <Route exact path = "/restaurant/new-review/:id" component = {leaveReview}/>
                        <Route path = "/restaurant/new-review/confirm/:id" component = {confirm} />
                        <Route path = "/reviewSubmited" component = {submitted}/>
                    <Footer/>
                </BrowserRouter>

            </main>
    );
  }
}


