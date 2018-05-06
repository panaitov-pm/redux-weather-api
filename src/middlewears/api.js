import axios from 'axios';
import C from '../constants';

export default ({dispatch, getState}) => next => action => {
   const {url, type, ...rest} = action;
   if(!url) return next(action);
   next({
	   ...rest,
	   type: type + C.START_LOADING
   });
	axios.get(url)
		.then(response => {
			next({
				...rest,
				type: type + C.FINISH_LOADING,
				payload: {data: response.data}
			})
		})
		.catch(error => {
			next({
				...rest,
				type: type + C.ERROR_LOADING,
				payload: {error}
			})
		})
}
