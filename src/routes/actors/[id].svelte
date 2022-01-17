<script context="module" lang="ts">
	import getOneActor from '$lib/getOneActor';

	import type { Actor } from '$lib/types/Actor';

	export async function load({ params }) {
		const actor: Actor = await getOneActor(params.id);
		return { props: { actor } };
	}
</script>

<script lang="ts">
	import ActingBox from '/src/components/ActingBox.svelte';
	import MovieInActorCard from '/src/components/MovieInActorCard.svelte';
	import SocialIcons from '/src/components/SocialIcons.svelte';

	import _calculateAge from '$lib/_calculateAge';

	export let actor: Actor;

	$: movie_credits_count = actor.movie_credits['cast'].length;
	$: movieCastsSorted = actor.movie_credits.cast
		.filter((a) => a.release_date)
		.sort((a, b) => {
			let releaseDateA = new Date(a.release_date);
			let releaseDateB = new Date(b.release_date);
			return releaseDateB > releaseDateA ? 1 : -1;
		});
</script>

<div class="md:flex space-y-4 md:space-x-9 pt-5 px-6 md:px-7 text-primary-content">
	<div id="left-side" class="flex flex-col flex-shrink-0">
		<img
			src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
			alt="Actor"
			class="rounded-2xl w-[300px] md:w-[300px] h-[300px] md:h-[450px] shadow-xl object-cover"
		/>
		<SocialIcons homepage={actor.homepage} socialIds={actor.external_ids} />
		<span class="hidden md:block p-4 text-lg font-os-bold">Personal Info</span>
		<div id="personal-info" class="hidden md:flex flex-col px-4 space-y-4">
			<div>
				<span class="block font-semibold">Known Credits</span>
				<span class="block text-sm">{movie_credits_count}</span>
			</div>
			<div>
				<span class="block font-semibold">Gender</span>
				<span class="block text-sm">{actor.gender == 1 ? 'Female' : 'Male'}</span>
			</div>
			<div>
				<span class="block font-semibold">Birthdate</span>
				<span class="block text-sm">{actor.birthday} ({_calculateAge(actor.birthday)} Y.O)</span>
			</div>
			<div>
				<span class="block font-semibold">Place Of Birth</span>
				<span class="block text-sm">{actor.place_of_birth}</span>
			</div>
			<div>
				<span class="block font-semibold">Also Known For</span>
				{#each actor.also_known_as as aka}
					<span class="block text-sm">{aka}</span>
				{/each}
			</div>
		</div>
	</div>
	<div id="right-side" class="font-os-regular">
		<span class="block py-3 text-4xl font-os-bold">{actor.name}</span>
		<div class="flex flex-col space-y-2">
			<span class="text-lg font-os-semibold">Biography</span>
			<p class="text-clip">{actor.biography.substring(0, 500) + ' ...'}</p>
		</div>
		<div>
			<span class="block pt-3 pb-1 font-os-semibold">Known For</span>
			<div
				class="flex py-3 md:py-5 space-x-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600 hover:cursor-pointer scrollbar-track-gray-100 scrollbar-track-rounded-full"
			>
				{#each movieCastsSorted as movie, i}
					{#if i < 5}
						<MovieInActorCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
		<div class="mt-6">
			<span class="block pb-4 pl-3 text-sl font-os-bold">Acting</span>
			<div class="bg-base-100 border border-primary-content rounded-lg">
				{#each movieCastsSorted as movie}
					<ActingBox {movie} />
				{/each}
			</div>
		</div>
	</div>
</div>
