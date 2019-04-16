
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Gerson from './Component/button.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


 class MapContainer extends Component {
  render(){
    return(
      <div className="App">
        <h1> yoo, sup foo ! </h1>
        <Gerson />


         <Map google={this.props.google} zoom={14}>
 
      <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

      <InfoWindow onClose={this.onInfoWindowClose}>
    
 </InfoWindow>
</Map>
      </div>

    );
  }
}



export default GoogleApiWrapper({
  apiKey: ('AIzaSyCrZ089AaLuQIQZMpj0xFxHH4I3Y9YCp64')
})(MapContainer)
