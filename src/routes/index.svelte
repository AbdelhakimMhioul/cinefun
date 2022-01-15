<script lang="ts">
	import MovieCard from '$lib/MovieCard.svelte';
</script>

<div id="popular-movies">
	<div class="px-10 py-7">
		<span class="heading">Popular Movies</span>
	</div>
	<div class="grid-items">
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
	</div>
</div>
<div id="now-playing-movies">
	<div class="px-10 py-7">
		<span class="heading">Now Playing Movies</span>
	</div>
	<div class="grid-items">
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
	</div>
</div>
