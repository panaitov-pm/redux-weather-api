import React from 'react';

const Header = () => {
	return (
		<div className="header">
			<div className="weather-box__inner">
				<h2 className="weather-box__title">City</h2>
				<h2 className="weather-box__title">Temperature</h2>
				<h2 className="weather-box__title">Pressure</h2>
				<h2 className="weather-box__title">Humidity</h2>
			</div>
		</div>
	);
};

export default Header;
