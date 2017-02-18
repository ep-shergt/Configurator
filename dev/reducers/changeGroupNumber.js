// state = [[1, 4, 5], [3, 2, 4]] means number of group level one: 2, group level two: 3, fields: numbers

const groupNumber = [[1]]

const changeGroupNumber = (state = {groupNumber}, action) => {
	switch(action.type) {
		case "CHANGE_NUMBER": {
			state = {...state, groupNumber: action.groupNumber}
			break;
		}
	}
	return state;
}

export default changeGroupNumber;