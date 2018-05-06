import PropTypes from 'prop-types'
import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';

import Header from './Header';
import Weather from './Weather';
import './weather.css';

const WeatherList = ({weather, isLoading, isError}) => {
	return (
		<Fragment>
			<Header />

			<div className="weather-box">
			{
				weather.map(city => (
					<Weather key={city.city.id} citiesData={city}/>
				))
			}
				{isLoading && <Spinner name="ball-clip-rotate-multiple" color="steelblue"/>}
			</div>

			{isError && <h1>City not found</h1>}
		</Fragment>
	);
};

WeatherList.propTypes = {
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	weather: PropTypes.array.isRequired
};

export default connect(
	({weather}) => ({
		weather: weather.entities,
		isLoading: weather.isLoading,
		isError: weather.isError
	})
)(WeatherList);
