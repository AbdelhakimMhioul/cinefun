<script lang="ts">
	import MovieCard from '$lib/MovieCard.svelte';
	import type { Movie } from 'src/types/Movie';
	import { myApiKey } from '$lib/getEnv';
	import { onMount } from 'svelte';
	import type { Genre } from 'src/types/Genre';

	let movies: Movie[] = [];
	let genres: Genre[] = [];

	let page = 1;
	let scrollY: number, innerHeight: number, clientHeight: number;

	$: console.log(innerHeight, scrollY, clientHeight);

	$: if (scrollY + innerHeight >= clientHeight) {
		page++;
		fetchMovies();
	}

	function fetchMovies() {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				movies = [...movies, ...data.results];
			});
	}

	onMount(() => {
		fetchMovies();
		fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${myApiKey}`)
			.then((res) => res.json())
			.then((res) => (genres = res.genres));
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
