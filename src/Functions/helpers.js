export function createGroups(array, width) {
	let returnArray = [];
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if ((i + 1) % width === 0 || i === array.length - 1) {
			newArray.push(array[i]);
			returnArray.push(newArray);
			newArray = [];
		} else {
			newArray.push(array[i]);
		}
	}
	return returnArray;
}

export function createYoutubeLink(url) {
	const v = new URLSearchParams(url.split("?")[1]);
	return "https://www.youtube.com/embed/" + v.get("v");
}

export function recursiveCountSubstring(nestedDataStructure, substring) {
	let count = 0;
	for (let key in nestedDataStructure) {
		let value = nestedDataStructure[key];
		if (isPrimitive(value) && typeof value === "string") {
			count += countSubstringInString(value, substring);
		} else {
			count += recursiveCountSubstring(value, substring);
		}
	}
	return count;
}

export function countSubstring(dataStructure, substring) {
	// substring in this case will be the search term
	let sum = 0;
	let regexValue = new RegExp(substring, "gi");

	for (let key in dataStructure) {
		let value = dataStructure[key];
		let count = (value.match(regexValue) || []).length;
		sum += count;
	}

	return sum;
}

function countSubstringInString(string, substring) {
	let regexValue = new RegExp(substring, "gi");
	return (string.match(regexValue) || []).length;
}

function isPrimitive(test) {
	return test !== Object(test);
}
