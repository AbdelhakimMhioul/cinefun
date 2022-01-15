<script lang="ts">
	import ActingBox from '$lib/ActingBox.svelte';
	import MovieInActorCard from '$lib/MovieInActorCard.svelte';
	import SocialIcons from '$lib/SocialIcons.svelte';

	import { page } from '$app/stores';
	import { myApiKey } from '$lib/getEnv';
	import type { Actor } from 'src/types/Actor';
	import { onMount } from 'svelte';

	let actor: Actor = {
		id: '',
		name: '',
		description: '',
		profile_path: '',
		known_for: [],
		gender: 1,
		place_of_birth: '',
		also_known_as: [],
		biography: '',
		birthday: '',
		movie_credits: {
			cast: []
		},
		external_ids: {},
		homepage: '',
		popularity: 0,
		character: ''
	};

	function _calculateAge(birthday) {
		let thisYear = new Date().getFullYear();
		let bithdayYear = new Date(birthday).getFullYear();
		return thisYear - bithdayYear;
	}

	$: movie_credits_count = actor.movie_credits['cast'].length;

	function fetchActor() {
		fetch(
			`https://api.themoviedb.org/3/person/${$page.params.id}?api_key=${myApiKey}&language=en-US&append_to_response=images,known_for_department,movie_credits,tv_credits,external_ids`
		)
			.then((res) => res.json())
			.then((res) => {
				actor = res;
			});
	}

	onMount(() => fetchActor());
</script>

<div class="flex space-x-9 pt-5 px-7 text-primary-content">
	<div id="left-side" class="flex flex-col flex-shrink-0">
		<img
			src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
			alt="Actor"
			class="rounded-lg w-[300px] h-[450px] shadow-xl"
		/>
		<SocialIcons homepage={actor.homepage} socialIds={actor.external_ids} />
		<span class="block p-4 text-lg font-os-bold">Personal Info</span>
		<div id="personal-info" class="flex flex-col px-4 space-y-4">
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
			<p class="text-clip">{actor.biography}</p>
		</div>
		<div>
			<span class="block pt-3 pb-1 font-os-semibold">Known For</span>
			<div
				class="flex py-5 space-x-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600 hover:cursor-pointer scrollbar-track-gray-100 scrollbar-track-rounded-full"
			>
				{#each actor.movie_credits.cast as movie, i}
					{#if i < 5}
						<MovieInActorCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
		<div class="mt-6">
			<span class="block pb-4 pl-3 text-sl font-os-bold">Acting</span>
			<div
				class="bg-base-100 border-t border-l border-r border-primary-content rounded-lg shadow-xl"
			>
				<div class="border-b border-primary-content">
					<ActingBox />
					<ActingBox />
					<ActingBox />
					<ActingBox />
					<ActingBox />
				</div>
				<div class="border-b border-primary-content">
					<ActingBox />
					<ActingBox />
					<ActingBox />
					<ActingBox />
					<ActingBox />
					<ActingBox />
					<ActingBox />
				</div>
			</div>
		</div>
	</div>
</div>
