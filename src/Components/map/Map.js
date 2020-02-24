
import React from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import AppContext from "../../Context.js";
import config from "../../config.js";
import burritoIcon from "../images/burritoIcon.png"
import pin from "../images/pin.png"





const mapStyles = {
    position: "relative",
    width: '100%',
    height: '29em',
    margin: '2em 0em 0em 0em',
};


class Maps extends React.Component {

    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            selectedRestaurant:'',
            activeMarker: {},
            showingInfoWindow: false,
        };
    }

    static contextType = AppContext;



    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedRestaurant: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };





        render() {
            if (!this.props.google) {
                return <div>Loading...</div>;
            }

            return (
                <div className="mapContainer">

                    <Map
                        google={this.props.google}
                        zoom={12}
                        style={mapStyles}
                        initialCenter={{lat: this.context.userLat, lng: this.context.userLng}}
                    >

                        {this.context.restaurants.map((hitLocation) => ( // **** loops through hits, creates markers and info windows
                            <Marker
                                key={hitLocation.id}
                                position={{
                                lat: hitLocation.geometry.location.lat,
                                lng: hitLocation.geometry.location.lng
                                }}
                                onClick={this.onMarkerClick}
                                name={hitLocation.name}
                                vicinity={hitLocation.vicinity}
                                icon={{
                                    url: burritoIcon,
                                    scaledSize: new window.google.maps.Size(30,30)
                                }}
                            />
                        ))}


                        <InfoWindow
                            visible={this.state.showingInfoWindow}
                            marker={this.state.activeMarker}

                        >
                            <div className='infoWindow'>
                                <h4>{this.state.selectedRestaurant.name}</h4>
                                <p>{this.state.selectedRestaurant.vicinity}</p>
                            </div>
                        </InfoWindow>


                        <Marker
                            position={{  // *********  User search location
                                lat: this.context.userLat,
                                lng: this.context.userLng
                            }}
                            icon={{
                                url: pin,
                                scaledSize: new window.google.maps.Size(35,35)
                            }}
                        />

                    </Map>
                </div>
            );
        }
}


export default GoogleApiWrapper({
    apiKey:`${config.API_KEY}`
})(Maps)
