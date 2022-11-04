export type User = {
	id: null | number,
	name: string,
	age: number
}
export interface UserCredential {
	username: string;
	password: string;
}

export type Setting = {
	handed: string
}