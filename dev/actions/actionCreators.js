
// Changers
//***************************************************************************
export function changeJSON(jsonData) {
	return {
		type: 'CHANGE_JSON',
		jsonData
	}
}

export function initializeJSON(jsonData) {
	return {
		type: 'INITIALIZE_JSON',
		jsonData
	}
}

//*******************************************************************************

// Markers
//*************************************************************************************************************************************
export function markGroupLevelOneForCopy(groupsLevelOneToCopy, element, index) {
	return {
		type: 'MARK_GROUP_L1',
		groupsLevelOneToCopy,
		element,
		index
	}
}

export function markGroupLevelTwoForCopy(subAccordionItems, groupsLevelTwoToCopy, groupLevelOneKey, element, index) {
	return {
		type: 'MARK_GROUP_L2',
		subAccordionItems,
		groupsLevelTwoToCopy,
		groupLevelOneKey,
		element,
		index
	}
}

export function markFieldToCopy(fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, element, index) {
	return {
		type: 'MARK_FIELD',
		fields,
		fieldsToCopy,
		groupLevelOneKey,
		groupLevelTwoKey,
		element,
		index
	}
}

//**************************************************************************************************************************************

// Deleters
//*************************************************************************************************************************
export function deleteGroupLevelOne(groupsLevelOneToCopy, element, index) {
	return {
		type: 'DELETE_GROUP_L1',
		groupsLevelOneToCopy,
		element,
		index
	}
}

export function deleteGroupLevelTwo(subAccordionItems, groupsLevelTwoToCopy, groupLevelOneKey, element, index) {
	return {
		type: 'DELETE_GROUP_L2',
		subAccordionItems,
		groupsLevelTwoToCopy,
		groupLevelOneKey,
		element,
		index
	}
}

export function deleteField(fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, element, index) {
	return {
		type: 'DELETE_FIELD',
		fields,
		fieldsToCopy,
		groupLevelOneKey,
		groupLevelTwoKey, element,
		index
	}
}

//**************************************************************************************************************************


//import * as user from "../actionCreators";
//import { importJSON } from "../actionCreators"

//user.importJSON()