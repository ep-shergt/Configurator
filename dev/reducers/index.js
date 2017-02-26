import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import changeJSONAndAccordion from './changeJSONAndAccordion';

const rootReducer = combineReducers({
	routing: routerReducer,
	database: changeJSONAndAccordion
});

export default rootReducer;