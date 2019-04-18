import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Gerson from './Component/button.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};
export class MapContainer extends Component {
  render() {
    return (
      
  <div id="container">


      <p>
      <a href='#'>
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

    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCrZ089AaLuQIQZMpj0xFxHH4I3Y9YCp64')
})(MapContainer)
