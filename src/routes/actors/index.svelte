<script lang="ts">
	import ActorCard from '$lib/ActorCard.svelte';
	import { myApiKey } from '$lib/getEnv';
	import type { Actor } from 'src/types/Actor';
	import { onMount } from 'svelte';

	let actors: Actor[] = [];

	function fetchActors() {
		fetch(
			`https://api.themoviedb.org/3/person/popular?api_key=${myApiKey}&language=en-US&append_to_response=images,known_for_department`
		)
			.then((res) => res.json())
			.then((res) => {
				actors = res.results;
			});
	}

	onMount(() => {
		fetchActors();
	});
</script>

<div class="px-10 py-7">
	<span class="heading">Popular Actors</span>
</div>
<div
	id="popular-actors"
	class="grid grid-cols-1 px-6 gap-x-2 gap-y-6 sm:gap-y-6 sm:gap-x-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center"
>
	{#each actors as actor}
		<ActorCard {actor} />
	{/each}
</div>
