import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
// import Gerson from './Component/button';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Typewriter from './Component/TypeWriter';

import { API_KEY } from '../config/keys';

const mapStyles = {
	width: '50%',
	height: '50%'
};

import CurrentLocation from './Component/map';

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

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};
	render() {
		return (
			<div id="container">
				<p>
					<a>Turstianguis</a>
				</p>
				<Typewriter />

				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: -1.2884,
						lng: 36.8233
					}}
				/>

				<CurrentLocation centerAroundCurrentLocation google={this.props.google}>
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
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: API_KEY
})(MapContainer);
