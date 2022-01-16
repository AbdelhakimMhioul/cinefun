let myApiKey: string | boolean;

myApiKey =
	process.env.NODE_ENV === 'production'
		? process.env.MY_API_KEY
		: (myApiKey = import.meta.env.VITE_MOVIE_DB_API_KEY);

export { myApiKey };
