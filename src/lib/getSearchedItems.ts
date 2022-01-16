import { myApiKey } from './getEnv';

const getSearchedItems = async (searchTerm) => {
	const res = fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${searchTerm}`
	);
	const data = await (await res).json();
	return data;
};

export default getSearchedItems;
