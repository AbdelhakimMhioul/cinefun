<script lang="ts">
	import type { Movie } from 'src/types/Movie';

	export let movie: Movie;
</script>

<div class="p-3 font-roboto">
	<span>{new Date(movie.release_date).getFullYear()} -- </span>
	<span class="font-semibold">{movie.title}</span>
	<span>| {movie.character}</span>
</div>
