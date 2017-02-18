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

import changeJSON from './changeJSON';
import changeGroupNumber from './changeGroupNumber';

const rootReducer = combineReducers({
	groupNumber: changeGroupNumber,
	jsonData: changeJSON,
	routing: routerReducer
});

export default rootReducer;