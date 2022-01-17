<script context="module" lang="ts">
	import getGenres from '$lib/getGenres';

	export async function load() {
		const { genres } = await getGenres();
		return {
			props: {
				genres
			}
		};
	}
</script>

<script lang="ts">
	import MovieCard from '/src/components/MovieCard.svelte';

	import type { Movie } from '$lib/types/Movie';
	import type { Genre } from '$lib/types/Genre';

	import { myApiKey } from '$lib/getEnv';

	let movies: Movie[] = [];
	export let genres: Genre[];

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
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="px-6 md:px-10 py-6 md:py-7">
	<span class="heading">All Movies</span>
</div>
<div id="popular-movies" class="grid-items" bind:clientHeight>
	{#each movies as movie}
		<MovieCard {movie} {genres} />
	{/each}
</div>
