export const getStorage = (key, options) => {
	let item = localStorage.getItem(key);
	if (options.parse) item = JSON.parse(item);
	return item;
}

export const setStorage = (key, value, options) => {
	value = JSON.stringify(value);
	localStorage.setItem(key, value);
}