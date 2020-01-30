
import React, {Component} from "react"
import HitBox from "../hitBox/hitBox.js";
import Map from "../map/Map.js";
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

                <Map/>

                <HitBox/>
                <HitBox/>

            </div>
        );
    }
}

//  google video on maps https://www.youtube.com/watch?v=Pf7g32CwX_s