import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import AppContext from "../../Context.js";
import config from "../../config.js";
import burritoIcon from "../images/burritoIcon.png";
import pin from "../images/pin.png";
import "../Map/Map.css";

class Maps extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      selectedRestaurant: "",
      activeMarker: {},
      showingInfoWindow: false,
    };
  }

  // setting state to open marker once clicked
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

    //  pulls in users search location to set a pin and zero map center
    const userLat = this.context.userLat;
    const userLng = this.context.userLng;

    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{
            // center the map
            lat: userLat,
            lng: userLng
          }}
        >
          {this.context.restaurants.map(hitLocation => (
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
                scaledSize: new window.google.maps.Size(30, 30)
              }}
              infoWindowAnchor
            />
          ))}

          <InfoWindow
            visible={this.state.showingInfoWindow}
            marker={this.state.activeMarker}
          >
            <div className="infoWindow">
              <h4>{this.state.selectedRestaurant.name}</h4>
              <p>{this.state.selectedRestaurant.vicinity}</p>
            </div>
          </InfoWindow>

          <Marker
            position={{
              lat: userLat,
              lng: userLng
            }}
            icon={{
              url: pin,
              scaledSize: new window.google.maps.Size(35, 35)
            }}
          />
        </Map>
      </div>
    );
  }
}

const mapStyles = {
  position: "relative",
  width: "100%",
  height: "29em",
  margin: "32px 0px 0px 0px"
};

export default GoogleApiWrapper({
  apiKey: `${config.API_KEY}`
})(Maps);
