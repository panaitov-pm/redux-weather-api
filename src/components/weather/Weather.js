import PropTypes from 'prop-types'
import React from 'react';

import Chart from '../Chart';
import Map from '../Map';

const Weather = ({citiesData, isLoading}) => {
	const {city, list} = citiesData;
	const data = list.reduce((acc, item) => {
		acc.temp.push(item.main.temp);
		acc.pressure.push(item.main.pressure);
		acc.humidity.push(item.main.humidity);
		return acc;
	}, {temp: [], pressure: [], humidity: []});
	const lat = city.coord.lat;
	const lng = city.coord.lon;

	return (
			<div className="weather-box__inner">
				<div className="weather-box__item  weather-box__item_map">{<Map lat={lat} lng={lng}  />}</div>
				<div className="weather-box__item"><Chart data={data.temp} color="#666699"/></div>
				<div className="weather-box__item"><Chart data={data.pressure} color="green" /></div>
				<div className="weather-box__item"><Chart data={data.humidity} color="red"/></div>
		</div>
	);
};

Weather.propTypes = {
	citiesData: PropTypes.object.isRequired,
};

Weather.defaultProps = {
    citiesData: {},
};


export default Weather;