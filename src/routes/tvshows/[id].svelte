<script context="module" lang="ts">
	import getOneTVShow from '$lib/getOneTVShow';

	import type { TVShow } from '$lib/types/TVShow';

	export async function load({ params }) {
		const tvshow: TVShow = await getOneTVShow(params.id);
		return { props: { tvshow } };
	}
</script>

<script lang="ts">
	import ActorInMovieCard from '/src/components/ActorInMovieCard.svelte';
	import ImageCard from '/src/components/ImageCard.svelte';
	import MovieCreator from '/src/components/MovieCreator.svelte';
	import MovieOption from '/src/components/MovieOption.svelte';

	export let tvshow: TVShow;
</script>

<!-- Movie Sections -->
<div class="flex mx-[2.5rem] py-[1.875rem] text-primary-content">
	<div class="flex-shrink-0">
		<img
			src={`https://image.tmdb.org/t/p/w500${tvshow.backdrop_path}`}
			alt="Poster"
			class="w-[400px] h-[500px] rounded-2xl hover:opacity-90 transition-all duration-300 ease-in-out object-fill"
		/>
	</div>
	<div class="mx-[40px]">
		<div class="text-[34px] tracking-wide font-os-bold flex">
			<span class="mr-3">{tvshow.name}</span>
			<span class="font-os-regular">
				({tvshow.first_air_date && new Date(tvshow.first_air_date).getFullYear()})
			</span>
		</div>
		<div class="flex">
			<span>Adventure, Action, Fantasy & Drama</span>
			<span class="mx-2">&bull;</span>
			<span>42min</span>
		</div>
		<div class="mt-5">
			<div class="flex items-center">
				<span class="pr-3">{tvshow.vote_average * 10}%</span>
				<div class="flex items-center justify-center space-x-2 text-primary-content">
					<MovieOption
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
					<MovieOption
						d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
					/>
					<MovieOption
						d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
					/>
					<button
						class="font-os-semibold flex items-center p-3 space-x-2 duration-300 border border-primary-content rounded-full whitespace-nowrap hover:bg-base-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>Play Trailer</span>
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col my-4 space-y-2">
			<span class="text-2xl font-semibold tracking-wider">Overview</span>
			<p>{tvshow.overview}</p>
		</div>
		<div class="flex space-x-10">
			<MovieCreator name="Frank Darabont" profession="Creator" />
		</div>
	</div>
</div>
<!-- Actors Sections -->
<div class="py-[0.875rem] text-primary-content">
	<div
		class="flex mx-[2.5rem] py-[1.5rem] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600 hover:cursor-pointer scrollbar-track-gray-100 scrollbar-track-rounded-full overflow-x-scroll space-x-5"
	>
		{#each tvshow.credits['cast'] as actor}
			<ActorInMovieCard {actor} />
		{/each}
	</div>
</div>
<!-- Images Sections -->
<div class="text-primary-content">
	<div class="px-10 py-7">
		<span class="heading">Images</span>
	</div>
	<div
		class="grid grid-cols-1 gap-0 px-6 md:gap-5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center"
	>
		{#each tvshow.images['backdrops'] as backdrop, i}
			{#if i < 6}
				<ImageCard {backdrop} />
			{/if}
		{/each}
	</div>
</div>
