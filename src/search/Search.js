
import React, {Component} from "react"
import HitBox from "../Components/hitBox/hitBox.js";

import './Search.css'



export default class search extends Component {

constructor(props) {
    super(props);
    this.state = {
        userAddress: '',
        userLat: '',
        userLong:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}




// sets the value that was input into the user form and updates userAddress state.
    handleChange(event) {
        this.setState({userAddress: event.target.value});
    }







// Sets state to get the user Latitude and longitude for the google Places API
    userCoordinates = (responseJson) => {
        (this.setState({userLat:responseJson.results[0].geometry.location.lat}));
        (this.setState({userLong:responseJson.results[0].geometry.location.lng}));
        //(this.restaurantPull());
    };



/*
Search form submission, running Geo Code to get the latitude/ longitude of the user address.
Sends GeoCode api response to userCoordinate function.
 */
    handleSubmit(event) {
        event.preventDefault();
        const geoCode = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        let userAddress = (this.state.userAddress);
        let geo = geoCode + userAddress + '&key=AIzaSyB3NE69ANz_b5ciRwN0D8PalZYy353pqS4';
        // geo endpoint confirmed to be working in postman.

        fetch(geo)
            .then(response => response.json())
            .then(responseJson => this.userCoordinates(responseJson))
            .catch(error => alert(error));
    }



    render() {
        return (
            <div className="searchPage">
                <div>
                    <h1>Search Restaurants</h1>
                </div>

                <div>
                    <form className="searchForm" onSubmit={this.handleSubmit}>
                        <input id="searchInput" type="text" placeholder="input your address..."
                                onChange={this.handleChange}/>
                        <button type="submit" id="searchButton">Search</button>
                    </form>
                </div>


                <div className="gradingScale">
                    <h3>Understanding the reviews:</h3>
                    <p> 1.1 - 6.9 <br/>I will eat it if it's free</p>
                    <p> 7.1 - 7.9 <br/>I will eat it if I can walk there</p>
                    <p> 8.1 - 8.9 <br/>I will drive to eat there</p>
                    <p> 9.1 - 9.9 <br/>Life changing event (very few)</p>
                </div>




                <HitBox/>
                <HitBox/>

            </div>
        );
    }
}

//  google video on maps https://www.youtube.com/watch?v=Pf7g32CwX_s

/*

import Maps from "../Components/map/Map.js";
put maps back in once place api fixed
                <div className="mapBox">
                    <Maps/>
                </div>

 */