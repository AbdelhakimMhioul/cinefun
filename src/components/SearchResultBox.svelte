<script lang="ts">
	import type { Movie } from '$lib/types/Movie';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let item: Movie;
</script>

<a
	href={`/movies/${item.id}`}
	class="h-full py-2 px-5 items-center flex space-x-5"
	on:click={() => dispatch('clicked')}
>
	<img
		src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
		alt=""
		class="w-20 h-20 object-cover rounded-xl"
	/>
	<span>{item.title}</span>
</a>
