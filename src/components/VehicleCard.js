import React, { Component } from 'react';
import VehicleAPI from '../api';
import LazyImg from './LazyImg';

export default
class VehicleCard extends Component {

	constructor(props) {
		super(props);

		this.state = {
			additionalData: null
		}
	}

	componentDidMount() {
		VehicleAPI.getSingle(this.props.data.id).then(data => {
			this.setState({
				additionalData: data
			});
		});
	}

	render() {
		return (
			<div className="card">
				<LazyImg className="card__image" src={this.props.data.media[0].url} />
				<div className="card__content">
					<h3 className="heading  card__heading">{this.props.data.id}</h3>
					{this.renderAdditionalData()}
				</div>
			</div>
		);
	}

	renderAdditionalData() {
		if (this.state.additionalData) {
			return [
				<p key="price" className="subheading">From {this.state.additionalData.price}</p>,
				<p key="description">{this.state.additionalData.description}</p>
			];
		}

		return (<div className="loader  loader--inline" />);
	}
}
