
import React, {Component} from "react"
import {Link} from "react-router-dom";
import Circle from "../ReviewCircle/Circle.js";
import './Search.css'
import AppContext from "../../Context.js";



/*
this is the search screen. user input their location into search, there will be an API call to backend. Backend will
send back Json data with the hits. The hits will update a map with markers, and also display a list of search hits with
user review. Once user selects a restaurant they will click either data on marker or hit list item. that will take them to
the next page Restaurant.
 */

export default class search extends Component {

    static contextType = AppContext;

    render() {
        // this will make a search result list for each hit returned from search.
        var arr=this.context.restaurants;
        var searchHits=[];
        for(var i=0;i<arr.length;i++){
            searchHits.push(

                <div className="hitItemContainer">
                    <div className="contactInfo">
                        <h2><Link to={`/restaurant/${this.context.restaurants[i].id}`}>{this.context.restaurants[i].name}</Link></h2>
                        <h4><Link to={`/restaurant/${this.context.restaurants[i].id}`}>{this.context.restaurants[i].address}</Link></h4>
                        <h5><Link to={`/restaurant/${this.context.restaurants[i].id}`}>{this.context.restaurants[i].phone}</Link></h5>
                    </div>

                    <div className="circleContainer">
                        <Circle rating = {this.context.restaurants[i].rating}/>
                    </div>
                </div>
            );
        }

        return (
            <div className="searchPage">
                <div>
                    <h1 id='pageTitle'>Discover Restaurants</h1>
                </div>

                <div>
                    <form className="searchForm" onSubmit={this.handleSubmit}>
                        <input id="searchInput" type="text" placeholder="input your address..."
                               onChange={this.handleChange}/>
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


                <div className="mapBox">
                    <h1>map goes here</h1>
                </div>


                <div className="hitsContainer">
                    {searchHits}
                </div>

            </div>
        );
    }
}




//  google video on maps https://www.youtube.com/watch?v=Pf7g32CwX_s
/*
import Maps from "../Components/Map/Map.js";
<Maps/>

 */

