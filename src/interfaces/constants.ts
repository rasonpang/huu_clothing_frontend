export interface EventData {
	imgSrc: string;
	url: string;
}

export interface GenreData {
	title: string;
	subGenres: SubGenre[];
}

export interface SubGenre {
	id: number;
	title: string;
	bg: string;
	url: string;
}

export interface Product {
	id: number;
	name: string;
	price: number;
}

export interface ProductData {
	[key: string]: Product[]
}