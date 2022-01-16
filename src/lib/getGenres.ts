import { myApiKey } from './getEnv';

const getGenres = async () => {
	const res = fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${myApiKey}`);
	const data = await (await res).json();
	return data;
};

export default getGenres;
