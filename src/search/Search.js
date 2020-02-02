
import React, {Component} from "react"
import HitBox from "../Components/hitBox/hitBox.js";
import Maps from "../Components/map/Map.js";
import './Search.css'



export default class search extends Component {














    render() {
        return (
            <div className="searchPage">
                <div>
                    <h1>Search Restaurants</h1>
                </div>

                <div>
                    <form className="searchForm">
                        <input id="searchInput" name="query" type="search" placeholder="Search for a restaurant..." value=""/>
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

                <div className="mapBox">
                    <Maps/>
                </div>

                <HitBox/>
                <HitBox/>

            </div>
        );
    }
}

//  google video on maps https://www.youtube.com/watch?v=Pf7g32CwX_s