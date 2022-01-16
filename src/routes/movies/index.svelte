<script lang="ts">
	import MovieCard from '/src/components/MovieCard.svelte';

	import type { Movie } from '$lib/types/Movie';
	import type { Genre } from '$lib/types/Genre';

	import { myApiKey } from '$lib/getEnv';
	import { onMount } from 'svelte';
	import getGenres from '$lib/getGenres';

	let movies: Movie[] = [];
	let genres: Genre[] = [];

	let page = 1;
	let scrollY: number, innerHeight: number, clientHeight: number;

	$: if (scrollY + innerHeight >= clientHeight) {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				movies = [...movies, ...data.results];
			});
		page++;
	}

	onMount(() => {
		getGenres().then((res) => (genres = res.genres));
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="px-10 py-7">
	<span class="heading">All Movies</span>
</div>
<div id="popular-movies" class="grid-items" bind:clientHeight>
	{#each movies as movie}
		<MovieCard {movie} {genres} />
	{/each}
</div>
