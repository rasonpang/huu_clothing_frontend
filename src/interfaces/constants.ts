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