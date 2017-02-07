import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import importFiles from './importFiles';

const rootReducer = combineReducers({importFiles, routing: routerReducer});

export default rootReducer;