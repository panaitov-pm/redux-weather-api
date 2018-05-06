/*import axios from 'axios';*/
import C from '../constants';

const API_KEY = '3d2f5bda192c23a9f4f8065ca4953877';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

/*export const fetchWeather = (city) => dispatch => {

	dispatch({
		type: C.FETCH_WEATHER + C.START_LOADING,
	});
	axios.get(url)
		.then(response => {
			const data = response.data;
			dispatch({
				type: C.FETCH_WEATHER + C.FINISH_LOADING,
				payload: {data}
			})
		}).catch(error => {
			dispatch({
				type: C.FETCH_WEATHER + C.ERROR_LOADING,
				payload: {error}
			});
	});
};*/

export const fetchWeather = (city) => ({
	type: C.FETCH_WEATHER,
	url: `${ROOT_URL}&q=${city},ua`
});