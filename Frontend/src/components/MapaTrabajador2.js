import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  height: "400px",
  width: "100%"
};

class MapView extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapLoaded: false
    };
    this.handleMapIdle = this.handleMapIdle.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState(prevState => ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }));
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerMounted = element => {
      console.log(element.marker)
    this.onMarkerClick(element.props, element.marker, element);
  };

  handleMapIdle = () => {
    this.setState({
      mapLoaded: true
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={17}
        initialCenter={{ lat: 3.498164, lng: -76.491464}}
        onIdle={this.handleMapIdle}
      >
        {this.state.mapLoaded && (
          <Marker ref={this.onMarkerMounted} position={{ lat: 3.498164, lng: -76.491464}} onClick={this.onMarkerClick} />
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>Your Location Here!</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAArwzjSXp89P_0IQVObJ6d1GVNfneRi-I')
})(MapView)
