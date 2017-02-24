import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import changeJSON from './changeJSON';
import changeGroupNumber from './changeGroupNumber';
import changeAccordion from './changeAccordion';
import changeGroupsLevelOneToCopy from './changeGroupsLevelOneToCopy';

const rootReducer = combineReducers({
	groupNumber: changeGroupNumber,
	jsonData: changeJSON,
	routing: routerReducer,
	accordion: changeAccordion
});

export default rootReducer;