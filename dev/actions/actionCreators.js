// import JSON

export function importJSON(file) {
	return {
		type: 'IMPORT_FILE',
		file
	}
}

//export JSON

export function exportJSON(file) {
	return {
		type: 'EXPORT_FILE',
		file
	}
}