import type { Movie } from './Movie';

export interface Social {
	facebook_id?: string;
	instagram_id?: string;
	twitter_id?: string;
}

export interface Actor {
	id: string;
	name: string;
	description: string;
	profile_path: string;
	homepage: string;
	known_for: Movie[];
	place_of_birth: string;
	also_known_as: string[];
	biography: string;
	gender: number;
	birthday: string;
	movie_credits: {
		cast: Movie[];
	};
	external_ids: Social;
	popularity: number;
	character: string;
}
