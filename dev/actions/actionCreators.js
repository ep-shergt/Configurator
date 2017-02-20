// import JSON

/*export function importJSON(jsonData) {
	return {
		type: 'IMPORT_JSON',
		jsonData
	}
}*/

//export JSON

export function changeJSON(jsonData) {
	return {
		type: 'CHANGE_JSON',
		jsonData
	}
}

export function changeGroupNumber(groupNumber) {
	return {
		type: 'CHANGE_NUMBER',
		groupNumber
	}
}

export function deleteGroupLevelOne(jsonData) {
	return {
		type: 'CHANGE_GROUP_L1',
		jsonData
	}
}

export function deleteGroupLevelTwo(jsonData) {
	return {
		type: 'CHANGE_GROUP_L2',
		jsonData
	}
}

//import * as user from "../actionCreators";
//import { importJSON } from "../actionCreators"

//user.importJSON()