import React, { Component } from 'react';
import inViewport from 'in-viewport';

export default class LazyImg extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hasLoaded: false
		}
	}

	componentDidMount() {
		const watcher = inViewport(this.elem, this.isVisible.bind(this));
	}

	isVisible() {
		const image = new Image();
		image.src = this.props.src;
		image.onload = () => {
			this.setState({
				hasLoaded: true
			});
		}
	}

	getStyle() {
		if (this.state.hasLoaded) {
			return {
				backgroundImage: `url(${this.props.src})`
			}
		}
	}

	render() {
		return (
			<div className={`lazyImg  ${this.props.className}  ${this.state.hasLoaded ? 'is-loaded' : ''}`} ref={elem => this.elem = elem}>
				<div className="lazyImg__bg" style={this.getStyle()}></div>
			</div>
		);
	}
}
