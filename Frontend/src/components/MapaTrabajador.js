import React, { Component } from 'react';
import Map from './Map';

class mapita extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 3.498180, lng: -76.491453}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default mapita;
