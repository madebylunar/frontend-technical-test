import React, { Component } from 'react';
import VehicleAPI from '../api';
import VehicleCard from './VehicleCard';

export default class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			vehicles: null
		}
	}

	componentDidMount() {
		VehicleAPI.getAll().then(data => {
			this.setState({
				vehicles: data.vehicles
			});
		});
	}

	render() {
		if(this.state.vehicles) {
			let cards = [];
			this.state.vehicles.map(vehicle => {
				cards.push(
					<div className="cardGroup__item" key={vehicle.id}>
						<VehicleCard data={vehicle} />
					</div>
				);
			});
			return (
				<div className="cardGroup">
					{cards}
				</div>
			)
		}

		return (<div className="loader" />);
	}
}
