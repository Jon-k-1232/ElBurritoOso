
import React from "react"
import { Map, GoogleApiWrapper } from 'google-maps-react';






const mapStyles = {
    width: '100%',
    height: '29em',
    margin: '2em 0em 0em 0em',
};




class Maps extends React.Component{

    render() {
        return (
            <div className="mapContainer">
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{lat: 33.448376, lng: -112.074036}}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:`${config.API_KEY}`
})(Maps);