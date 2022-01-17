import type { Actor } from './Actor';
import type { Genre } from './Genre';
import type { Backdrop } from './Movie';

export interface TVShow {
	genres: Genre[];
	id: number;
	name: string;
	first_air_date: string;
	poster_path: string;
	genre_ids: Array<number>;
	backdrop_path: string;
	overview: string;
	vote_average: number;
	character: string;
	episode_run_time: Array<number>;
	credits: {
		cast: Array<Actor>;
	};
	images: {
		backdrops: Backdrop[];
	};
	videos: {
		results: Array<{
			key: string;
		}>;
	};
}
