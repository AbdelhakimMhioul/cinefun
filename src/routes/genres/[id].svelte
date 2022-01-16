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
	import { myApiKey } from '$lib/getEnv';
	import type { Movie } from '$lib/types/Movie';
	import type { Genre } from '$lib/types/Genre';
	import MovieCard from '/src/components/MovieCard.svelte';
	import { page } from '$app/stores';

	let pageNum = 1;
	let scrollY: number, innerHeight: number, clientHeight: number;

	let movies: Movie[] = [];

	$: if (scrollY + innerHeight >= clientHeight) {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`
		)
			.then((res) => res.json())
			.then((res) => {
				movies = movies.concat(
					res.results.filter((movie) => movie.genre_ids.includes(parseInt($page.params.id)))
				);
				pageNum++;
			});
	}

	export let genres: Genre[];
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="px-10 py-7">
	<span class="heading">All Movies</span>
</div>
<div id="movie-genres" class="grid-items" bind:clientHeight>
	{#each movies as movie}
		<MovieCard {movie} {genres} />
	{/each}
</div>
