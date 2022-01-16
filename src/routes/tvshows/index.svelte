<script lang="ts">
	import { myApiKey } from '$lib/getEnv';
	import TvShowCard from '$lib/TVShowCard.svelte';
	import type { Genre } from 'src/types/Genre';
	import type { TVShow } from 'src/types/TVShow';
	import { onMount } from 'svelte';

	let tvshows: TVShow[] = Array<{
		id: 0;
		name: '';
		first_air_date: '';
		poster_path: '';
		genre_ids: [];
		backdrop_path: '';
		overview: '';
		vote_average: 0;
		character: '';
		credits: {
			cast: [];
		};
		images: {
			backdrops: [];
		};
	}>();
	let page = 1;
	let genres: Genre[] = [];
	let scrollY: number, innerHeight: number, clientHeight: number;

	$: if (scrollY + innerHeight >= clientHeight) {
		fetchTVShows();
		page++;
	}

	onMount(() => {
		fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${myApiKey}`)
			.then((res) => res.json())
			.then((res) => (genres = res.genres));
	});

	function fetchTVShows() {
		console.log('object');
		fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${myApiKey}&page=${page}`)
			.then((res) => res.json())
			.then((data) => {
				tvshows = [...tvshows, ...data.results];
			});
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="px-10 py-7">
	<span class="heading">TV Shows</span>
</div>
<div id="popular-tv-shows" class="grid-items" bind:clientHeight>
	{#each tvshows as tvshow}
		<TvShowCard {genres} {tvshow} />
	{/each}
</div>
