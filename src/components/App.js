import React, {Component} from 'react';
import { withAlert } from 'react-alert'

import Search from './Search';
import WeatherList from './weather/WeatherList';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Search />
				<WeatherList />
			</div>

		);
	}
}


export default withAlert(App);