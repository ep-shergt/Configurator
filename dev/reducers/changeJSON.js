/*import comments from '../data/comments';

const importFiles = (state = comments, action) => {
	switch(action.type) {
		case "CHANGE_NAME": {
			state = {...state, name: action.payload}
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age: action.payload}
			break;
		}
		case "E": {
			throw new Error("AAAA!!!!");
		}
	}
	return state;
};

export default importFiles;*/

import jsonData from '../data/JSONExample';

const changeJSON = (state = {jsonData}, action) => {
	switch(action.type){
		case "CHANGE_JSON": {
			console.log('run change_json');
			state = {...state, jsonData: action.jsonData}
			break;
		}

		case "CHANGE_GROUP_L1": {
			console.log('run change_group_l1');
			state = {...state, jsonData: action.jsonData}
			break;
		}
	}
	return state;
}

export default changeJSON;