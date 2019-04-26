import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
// import Gerson from './Component/button';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Typewriter from './Component/TypeWriter';
import { API_KEY } from '../config/keys.js';
import SearchBar from './Component/SearchBar';
import CommentBox from './Component/CommentBox';

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
			<div className='parentComponent'>
				<div className='Title'>
					<p>
						<a>Turistianguis</a>
					</p>
				</div>

				<div className='Search'>
					<SearchBar/>
				</div>

				<div className='TypeWriter'>
					<Typewriter />
				</div>

				<div id='container'>
					<CurrentLocation centerAroundCurrentLocation google={this.props.google}>
						<Marker onClick={this.onMarkerClick} name={'current location'} />
						<Marker
    						name={'puebla'}
   						 	position={{lat: 19.033333, lng: -98.183334}} />
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

				<div className= 'color'>
				  <CommentBox/>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: API_KEY
})(MapContainer);
