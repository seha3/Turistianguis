import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
// import Gerson from './Component/button';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Typewriter from './Component/TypeWriter';
import { API_KEY } from '../config/keys.js';
import SearchBar from './Component/SearchBar';

import CommentBox from './Component/commentBox.js';

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
//to render comments from server
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			user: [''],
// 			comments: [''],
// 		}
// 		this.onButtonClick = this.onButtonClick.bind(this)
// 	}
// 	componentDiMount() {
// 		axios.get('/box')
// 		.then(res => {
// 			this.setState({comments:res.data})
// 			console.log("there is a state", this.state.comments)
// 		})
// 		.catch(error => {
// 			console.log("error", error);
// 		})
// 	}
// }
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

						<Marker
						 onClick={this.onMarkerClick}
    						name={'Tianguis del Chopo'}
   						 	position={{lat: 19.448577, lng: -99.149938}} />
									<Marker
						 onClick={this.onMarkerClick}
    						name={'Tianguis de Tepito'}
   						 	position={{lat: 19.442896, lng:  -99.124750}} />
									<Marker
						 onClick={this.onMarkerClick}
    						name={'Tianguis de la Lagunilla'}
   						 	position={{lat: 19.443609, lng:  -99.135247}} />
									<Marker
						 onClick={this.onMarkerClick}
    						name={'Tianguis de la Portales'}
   						 	position={{lat: 19.371875, lng:  -99.145546}} />
									<Marker
						 onClick={this.onMarkerClick}
    						name={'Tianguis de la San Felipe'}
   						 	position={{lat: 19.490034, lng:  -99.073862}} />
									<Marker
						 onClick={this.onMarkerClick}
    						name={'Tianguis de las Pacas de Pino Suarez'}
   						 	position={{lat: 19.420050, lng:  -99.133785 }} />
									<Marker
						 onClick={this.onMarkerClick}
    						name={'Tianguis del Salado'}
   						 	position={{lat: 19.369841, lng:  -98.960375}} />

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

				<div className='color'>
		<CommentBox/>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: API_KEY
})(MapContainer);
