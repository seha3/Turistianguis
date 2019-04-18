import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Gerson from './Component/button.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

import CurrentLocation from './Component/map.js'
 


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div id='container'>
      <p>
        <a>
          Turistianguis
        </a>
      </p>

      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
      </div>

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }

  }


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCrZ089AaLuQIQZMpj0xFxHH4I3Y9YCp64')
})(MapContainer)
