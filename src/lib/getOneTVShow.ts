import { myApiKey } from './getEnv';

const getOneTVShow = async (id: string) => {
	const res = fetch(
		`https://api.themoviedb.org/3/tv/${id}?api_key=${myApiKey}&append_to_response=credits,videos,images`
	);
	const data = await (await res).json();
	return data;
};

export default getOneTVShow;
