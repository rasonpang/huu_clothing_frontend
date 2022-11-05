export type User = {
	authenticated: boolean;
	name: string
}
export interface UserCredential {
	username?: string;
	password?: string;

	refresh?: string;
}

export type Setting = {
	handed: string
}