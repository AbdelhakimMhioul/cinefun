import { MY_API_KEY } from '$lib/Env';

let myApiKey: string | boolean;

if (process.env.NODE_ENV === 'production') {
	// For production
	console.log('production');
	myApiKey = process.env.MY_API_KEY;
} else {
	// For development
	console.log('development');
	myApiKey = MY_API_KEY;
}

export { myApiKey };
