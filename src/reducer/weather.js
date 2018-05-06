import C from '../constants';

const defaultState = {
	isLoading: false,
	isError: false,
	entities: []
};

export default (state = defaultState, action) => {
	const {type, payload} = action;

	switch (type) {
		case C.FETCH_WEATHER + C.START_LOADING:
			return {...state, isLoading: true, isError: false};
		case C.FETCH_WEATHER + C.ERROR_LOADING:
			return {...state, isError:true, isLoading: false};
		case C.FETCH_WEATHER + C.FINISH_LOADING:
			return {...state, isLoading: false, isError: false, entities:[...state.entities, payload.data]};
		default:
			return state;
	}
}