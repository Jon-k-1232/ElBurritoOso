
import React, {Component} from "react"
import {Link} from "react-router-dom";
import config from "../../config.js";
import Circle from "../ReviewCircle/Circle.js";
import './Search.css'
import AppContext from "../../Context.js";
import Maps from "../Map/Map.js";



/*
this is the search screen. user input their location into search, there will be an API call to backend. Backend will
send back Json data with the hits. The hits will update a map with markers, and also display a list of search hits with
user review. Once user selects a restaurant they will click either data on marker or hit list item. that will take them to
the next page Restaurant.
 */

export default class search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: [],
            apiRestaurants: [],
        };
    }


    static contextType = AppContext;


// 16421 N. Tatum Blvd, Phoenix, AZ 85308

    fetchRestaurants = (e) => {
        e.preventDefault();
        let location = (this.state.address);

        fetch(`${config.API_ENDPOINT_DATA}/${location}`)
            .then(resp => resp.json())
            .then(data => {
                this.context.apiAddRestaurants(data.results);                                  // sets google restaurants to context
                this.context.apiAddReviews(data.reviews);                                      // sets reviews, scores from DB to context
                this.context.apiUserLat(data.userLatLong.results[0].geometry.location.lat);    // sets latitude of address user typed in
                this.context.apiUserLng(data.userLatLong.results[0].geometry.location.lng);    // sets longitude of address user typed in
                this.setState({apiRestaurants: data})                                          // set this in order to cause re render for development only.
            })
            .catch((error) => {
                console.log(error, "Theres an error.")
            })
    };




    addressUpdate = (userAddress) => {
        this.setState(
            {
                address: userAddress,
            })
    };



    render() {


        let arr=this.context.restaurants;
        let searchHits=[];
        let reviewSearch = this.context.reviews;


        // this will make a search result list for each hit returned from search.
        for(let i = 0; i < arr.length; i++){
            const rateFinder = (syncId) => { // sync equals restaurant ID string
                let sum = 0;
                let avg = 0;
                let reviewRate = [];
                for(let i = 0; i < reviewSearch.length; i++){ // finds the length of data base returned reviews
                    if(syncId === reviewSearch[i].restaurantId) { // compares the google restaurant ID to Database review restaurant ID
                        reviewRate.push(reviewSearch[i].rating);// if the restaurant id matches db restaurant ID then pushes the integer rating onto array
                        sum += reviewSearch[i].rating;   // adds the integers together
                    }
                }
                avg = sum / reviewRate.length; // divides sum by total
                return reviewRate.length ? <div className="circleContainer"><Circle rating={avg}/></div> : <div className="circleContainer"><h2>Be the first to write a review</h2></div>
            };


            searchHits.push( // iterates a new restaurant info for each hit.
                <div className="hitItemContainer">
                    <div className="contactInfo">
                        <h2><Link to={`/restaurant/${this.context.restaurants[i].id}`}>{this.context.restaurants[i].name}</Link></h2>
                        <h4><Link to={`/restaurant/${this.context.restaurants[i].id}`}>{this.context.restaurants[i].vicinity}</Link></h4>
                    </div>

                    <div className="circleContainer">
                        {rateFinder(this.context.restaurants[i].id)}
                    </div>

                </div>
            );
        }


        // conditional rendering for map. Once at least 1 search result is found, map will populate on search screen.
        const displayMap = () => {
            if (arr.length >= 1){
                return <div className="mapBox">
                    <Maps/>
                </div>
            }
        };


        return (
            <div className="searchPage">
                <div>
                    <h1 id='pageTitle'>Discover Restaurants</h1>
                </div>

                <div>
                    <form className="searchForm" onSubmit={this.fetchRestaurants}>
                        <input id="searchInput" type="text" placeholder="input your address..."
                               onChange={e => this.addressUpdate(e.target.value)}/>
                        <button type="submit" id="searchButton">Search</button>
                    </form>
                </div>


                <div className="gradingScale">
                    <h2>Understanding the reviews:</h2>
                    <p><span> 1.1 - 6.9 </span><br/>I will eat it if it's free</p>
                    <p><span> 7.1 - 7.9 </span><br/>I will eat it if I can walk there</p>
                    <p><span> 8.1 - 8.9 </span><br/>I will drive to eat there</p>
                    <p><span> 9.1 - 9.9 </span><br/>Life changing event (very few)</p>
                </div>

                {displayMap()}

                <div className="hitsContainer">
                    {searchHits}
                </div>

            </div>
        );
    }
}


