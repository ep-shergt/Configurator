import { applyMiddleware, createStore, compse } from 'redux';
import axios from "axios";
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";

/*const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}*/

import rootReducer from './reducers/index';

//import comments from './../data/comments';

/*const defaultState = {
	
};

const logger = (store) => (next) => (action) => {
	console.log("action fired", action);
	//action.type = "CHANGE_AGE";
	next(action);
}

const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("AGHHHH", e);
	}
}

const middleware = applyMiddleware(logger, error);

const store = createStore(rootReducer, 1, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState())
});


store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
store.dispatch({type: "E"});
*/

/*const reducer = (state=initialState, action) => {
	switch (action.type) {
		case "FETCH_USERS_PENDING": {
			return {...state, fetching: true}
			break;
		}
		case "FETCH_USERS_REJECTED": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "FETCH_USERS_FULFILLED": {
			return {...state,
					fetching: false,
					fetched: true, 
					users: action.payload
			}
			break;
		}
	}
	return state;
}*/

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(rootReducer, middleware)

/*store.dispatch({
	type: "FETCH_USERS",
	payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})*/

/*store.dispatch((dispatch) => {
	dispatch({type: "FETCH_USERS_START"})
	axios.get("http://rest.learncode.academy/api/wstern/users")
		.then((response) => {
			dispatch({type: "RECEIVE_USERS", payload: response.data})
		})
		.catch((err) => {
			dispatch({
				type: "FETCH_USERS_ERROR", payload: err
			})
		})
})
*/

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
