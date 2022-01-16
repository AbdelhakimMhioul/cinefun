import { myApiKey } from './getEnv';

const getPopularMovies = async () => {
	const res = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}`);
	const data = await (await res).json();
	return data;
};

export default getPopularMovies;
