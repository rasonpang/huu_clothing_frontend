import { GetStorageOptions } from "@/interfaces/helpers";

export const getStorage = (key: string, options: GetStorageOptions) => {
	let item = localStorage.getItem(key) ?? '';
	if (options.parse) item = JSON.parse(item);
	return item;
}

export const setStorage = (key: string, value: any) => {
	value = JSON.stringify(value);
	localStorage.setItem(key, value);
}