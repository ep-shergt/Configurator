export function extractContent(html) {
    return (new DOMParser).parseFromString(html, "text/html").documentElement.textContent;
}

export function removeArrayElement(oldArray, index) {
	let newArray = [...oldArray.slice(0, index), ...oldArray.slice(index+1)];

	return newArray;
}