<script lang="ts">
	import type { Movie } from 'src/types/Movie';

	export let movie: Movie;
</script>

<a href={`/movies/${movie.id}`} class="flex-shrink-0 text-center w-[150px] h-[225px] ">
	<img
		src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${movie.poster_path}`}
		alt="Movie"
		class="w-[150px] h-[225px]"
	/>
	<p class="w-full">{movie.title}</p>
</a>
