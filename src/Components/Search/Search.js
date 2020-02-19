
import React, {Component} from "react"
import {Link} from "react-router-dom";
import config from "../../config.js";
import Circle from "../ReviewCircle/Circle.js";
import './Search.css'
import AppContext from "../../Context.js";
//import Maps from "../Map/Map.js";



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

// 16421 N. Tatum Blvd, Phoenix, AZ 85308

    fetchRestaurants = (e) => {
        e.preventDefault();
        let location = (this.state.address);

        fetch(`${config.API_ENDPOINT_DATA}/${location}`)
            .then(resp => resp.json())
            .then(data => {
                this.context.apiAddRestaurants(data.results);
                this.context.apiAddReviews(data.reviews);
                this.setState({apiRestaurants: data}) // set this in order to cause re render for development only.
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





    static contextType = AppContext;

    render() {


        // this will make a search result list for each hit returned from search.
        let arr=this.context.restaurants;
        let searchHits=[];
        for(let i=0;i<arr.length;i++){
            searchHits.push(

                <div className="hitItemContainer">
                    <div className="contactInfo">
                        <h2><Link to={`/restaurant/${this.context.restaurants[i].id}`}>{this.context.restaurants[i].name}</Link></h2>
                        <h4><Link to={`/restaurant/${this.context.restaurants[i].id}`}>{this.context.restaurants[i].vicinity}</Link></h4>
                    </div>

                    <div className="circleContainer">
                        <Circle rating = {this.context.restaurants[i].rating}/>
                    </div>

                </div>
            );
        }


        const displayMap = () => {
            if (arr.length >= 1){
                return <div className="mapBox"><h1>Map Here</h1></div>
            }else{
                console.log(arr)
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




//  google video on maps https://www.youtube.com/watch?v=Pf7g32CwX_s
/*
import Maps from "../Components/Map/Map.js";
<Maps/>

 */

