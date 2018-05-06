import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducer';

import api from '../middlewears/api';

const logger = createLogger({
	collapsed: true
});

const store = createStore(
	reducer,
	applyMiddleware(thunk, api, logger),
);
window.store = store;

export default store;