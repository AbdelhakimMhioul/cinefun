<script lang="ts">
	import type { Movie } from '$lib/types/Movie';
	import type { TVShow } from '$lib/types/TVShow';

	export let item: Movie | TVShow;
</script>

<a href="/movies" class="h-full py-2 px-5 items-center flex space-x-5">
	<img
		src="https://image.tmdb.org/t/p/w500/sg4xJaufDiQl7caFEskBtQXfD4x.jpg"
		alt=""
		class="w-20 h-20 object-cover rounded-xl"
	/>
	<span>{item.id}</span>
</a>
