<script lang="ts">
	import MovieCard from '$lib/MovieCard.svelte';
	import type { Genre } from 'src/types/Genre';
	import type { Movie } from 'src/types/Movie';
	import { onMount } from 'svelte';

	let popularMovies,
		nowPlayingMovies: Movie[] = [];
	let genres: Genre[] = [];

	onMount(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}`
		)
			.then((res) => res.json())
			.then((res) => (popularMovies = res.results));

		fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${
				import.meta.env.VITE_MOVIE_DB_API_KEY
			}`
		)
			.then((res) => res.json())
			.then((res) => (nowPlayingMovies = res.results));

		fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${
				import.meta.env.VITE_MOVIE_DB_API_KEY
			}`
		)
			.then((res) => res.json())
			.then((res) => (genres = res.genres));
	});
</script>

<div id="popular-movies">
	<div class="px-10 py-7">
		<span class="heading">Popular Movies</span>
	</div>
	{#if genres && genres.length > 0}
		<div class="grid-items">
			{#each popularMovies as movie}
				<MovieCard {movie} {genres} />
			{/each}
		</div>
	{/if}
</div>
<div id="now-playing-movies">
	<div class="px-10 py-7">
		<span class="heading">Now Playing Movies</span>
	</div>
	{#if genres && genres.length > 0}
		<div class="grid-items">
			{#each nowPlayingMovies as movie}
				<MovieCard {movie} {genres} />
			{/each}
		</div>
	{/if}
</div>
