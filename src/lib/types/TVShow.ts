import type { Actor } from './Actor';
import type { Backdrop } from './Movie';

export interface TVShow {
	id: number;
	name: string;
	first_air_date: string;
	poster_path: string;
	genre_ids: Array<number>;
	backdrop_path: string;
	overview: string;
	vote_average: number;
	character: string;
	credits: {
		cast: Array<Actor>;
	};
	images: {
		backdrops: Backdrop[];
	};
}
