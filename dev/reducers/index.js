/*import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import importFiles from './importFiles';

const rootReducer = combineReducers({
	user: importFiles,
	tweets: tweetsReducer,
	routing: routerReducer
});

export default rootReducer;*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import exportFiles from './exportFiles';

const rootReducer = combineReducers({
	jsonData: exportFiles,
	routing: routerReducer
});

export default rootReducer;