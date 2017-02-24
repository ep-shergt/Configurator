import jsonData from './../data/JSONExample';
import { removeArrayElement } from './../helpers';

const changeGroupsLevelOneToCopy = (state = [], action) => {
	switch(action.type){
		case "DELETE_FROM_GROUP_LEVEL_ONE_TO_COPY": {
			console.log('g1');
		}

		default:
			return state; 
	}
	return state;
}

export default changeGroupsLevelOneToCopy;