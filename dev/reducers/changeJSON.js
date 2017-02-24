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