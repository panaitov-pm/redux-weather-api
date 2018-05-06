import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchWeather} from '../AC';

class Search extends Component {
	state = {city: ''};

	handleSubmit = (e) => {
		e.preventDefault();
		const {weather, fetchWeather} = this.props;
		const {city} = this.state;
		let cities = weather.reduce((acc, item) => {
			let city = item.city.name.toLowerCase();
			(!acc.includes(city)) && acc.push(city);
			return acc;
		}, []);
		if( !cities.includes(city.toLowerCase())) {
			fetchWeather(this.state.city);
		}
		this.setState({city: ''});
	};
	handleSetCity = ({target}) => this.setState({city: target.value.trim()});
	render() {
		return (
			<form className="my-3"
				onSubmit={this.handleSubmit}
			>
				<div className="input-group">
					<input type="text"
					       placeholder='Enter some city'
					       value={this.state.city}
					       className="form-control"
					       onChange={this.handleSetCity}
					/>
					<div className="input-group-append">
						<button className="input-group-text">Search</button>
					</div>
				</div>
			</form>
		);
	}
}

Search.propTypes = {
	fetchWeather: PropTypes.func.isRequired,
};

export default connect(
	({weather}) => ({
		weather: weather.entities
	}),
	{fetchWeather}
)(Search);
