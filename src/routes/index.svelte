<script lang="ts">
	import MovieCard from '/src/components/MovieCard.svelte';

	import type { Genre } from '$lib/types/Genre';
	import type { Movie } from '$lib/types/Movie';
	import getGenres from '$lib/getGenres';
	import getNowPlayingMovies from '$lib/getNowPlayingMovies';
	import getPopularMovies from '$lib/getPopularMovies';

	import { onMount } from 'svelte';

	let popularMovies: Movie[],
		nowPlayingMovies: Movie[] = [];
	let genres: Genre[] = [];

	onMount(() => {
		getPopularMovies().then((res) => (popularMovies = res.results));
		getNowPlayingMovies().then((res) => (nowPlayingMovies = res.results));
		getGenres().then((res) => (genres = res.genres));
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
