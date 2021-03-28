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

export function getIdNo(param) {
	return param.split("-")[param.split("-").length - 1];
}

export function makeQueryParams({ key, object }) {
	return key + "=" + object.title.split(" ").join("-") + "-" + object.id;
}
export function toCamelCase(str) {
	return str
		.replace(/\s(.)/g, function($1) {
			return $1.toUpperCase();
		})
		.replace(/\s/g, "")
		.replace(/^(.)/, function($1) {
			return $1.toLowerCase();
		});
}

export function makeQueryString() {
	return [...arguments].map(makeQueryParams).join("&");
}

export function toPascalCase(input) {
	return `${input}`
		.replace(new RegExp(/[-_]+/, "g"), " ")
		.replace(new RegExp(/[^\w\s]/, "g"), "")
		.replace(
			new RegExp(/\s+(.)(\w+)/, "g"),
			($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
		)
		.replace(new RegExp(/\s/, "g"), "")
		.replace(new RegExp(/\w/), (s) => s.toUpperCase());
}
