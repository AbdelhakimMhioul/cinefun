import { myApiKey } from './getEnv';

const getOneActor = async (id: string) => {
	const res = fetch(
		`https://api.themoviedb.org/3/person/${id}?api_key=${myApiKey}&language=en-US&append_to_response=images,known_for_department,movie_credits,tv_credits,external_ids`
	);
	const data = await (await res).json();
	return data;
};

export default getOneActor;
