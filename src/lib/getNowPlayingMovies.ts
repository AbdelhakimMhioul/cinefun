import { myApiKey } from './getEnv';

const getNowPlayingMovies = async () => {
	const res = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${myApiKey}`);
	const data = await (await res).json();
	return data;
};

export default getNowPlayingMovies;
