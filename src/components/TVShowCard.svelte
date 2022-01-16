<script lang="ts">
	import GenreCapsule from './GenreCapsule.svelte';
	import type { Genre } from '$lib/types/Genre';
	import type { TVShow } from '$lib/types/TVShow';

	export let tvshow: TVShow;
	export let genres: Genre[];
	$: numberEmptyStars = Math.ceil(5 - tvshow.vote_average / 2 - 1);
	$: tvshowGenres =
		genres.length > 0 && genres.filter((genre) => tvshow.genre_ids.includes(genre.id));
</script>

<div class="content-center w-[90%] bg-base-200 border border-primary-content text-primary-content">
	<div class="relative">
		<a href={`/tvshows/${tvshow.id}`}>
			{#if tvshow.poster_path}
				<img
					src={`https://image.tmdb.org/t/p/w400${tvshow.poster_path}`}
					alt="Poster Path"
					class="w-full h-[250px]"
				/>
			{:else}
				<img src="https://via.placeholder.com/300x450" alt="Poster Path" class="w-full h-[250px]" />
			{/if}
			<span
				class="block object-cover pl-3 pr-8 pb-2 mt-3 tracking-wide uppercase truncate font-os-semibold"
			>
				{tvshow.name}
			</span>
		</a>
	</div>
	<div class="flex items-center px-2 mb-3">
		<div class="flex mr-2">
			{#each Array(5 - numberEmptyStars) as _}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 stroke-amber-500 fill-amber-500"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
					/>
				</svg>
			{/each}
			{#each Array(numberEmptyStars) as _}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 stroke-amber-500 fill-transparent"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
					/>
				</svg>
			{/each}
		</div>
		<span>{tvshow.vote_average * 10}%</span>
	</div>
	<div class="flex py-2 overflow-x-scroll bg-base-300 rounded-bl rounded-br scrollbar-thin">
		{#if tvshowGenres.length > 0}
			{#each tvshowGenres as genre}
				<GenreCapsule {genre} />
			{/each}
		{:else}
			<span
				class="rounded-full bg-base-100 text-primary-content px-3 py-2 font-os-bold ml-2 inline flex-shrink-0"
				>No Genres</span
			>
		{/if}
	</div>
</div>
