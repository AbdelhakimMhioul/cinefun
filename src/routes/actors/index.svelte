<script lang="ts">
	import ActorCard from '$lib/ActorCard.svelte';
	import { myApiKey } from '$lib/getEnv';
	import type { Actor } from 'src/types/Actor';

	let actors: Actor[] = [];

	function fetchActors() {
		fetch(
			`https://api.themoviedb.org/3/person/popular?api_key=${myApiKey}&language=en-US&page=${page}&append_to_response=images,known_for_department`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				actors = [...actors, ...data.results];
			});
	}

	let scrollY: number, innerHeight: number, clientHeight: number;
	let page = 1;

	$: if (scrollY + innerHeight >= clientHeight) {
		fetchActors();
		page++;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="px-10 py-7">
	<span class="heading">Popular Actors</span>
</div>
<div
	id="popular-actors"
	class="grid grid-cols-1 px-6 gap-x-2 gap-y-6 sm:gap-y-6 sm:gap-x-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center"
	bind:clientHeight
>
	{#each actors as actor}
		<ActorCard {actor} />
	{/each}
</div>
