export interface Movie {
	id: number;
	title: string;
	release_date: string;
	poster_path: string;
	genre_ids: Array<number>;
	backdrop_path: string;
	overview: string;
	vote_average: number;
}
