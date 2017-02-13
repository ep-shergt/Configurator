// import JSON

export function importJSON(jsonData) {
	return {
		type: 'IMPORT_JSON',
		jsonData
	}
}

//export JSON

export function exportJSON(jsonData) {
	return {
		type: 'EXPORT_JSON',
		jsonData
	}
}

//import * as user from "../actionCreators";
//import { importJSON } from "../actionCreators"

//user.importJSON()