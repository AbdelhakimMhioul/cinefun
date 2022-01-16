<script lang="ts">
	import type { Actor } from '$lib/types/Actor';

	export let actor: Actor;
</script>

<a href={`/actors/${actor.id}`} class="border border-primary-content bg-base-200 rounded-lg">
	<div class="w-[190px] h-[230px]">
		{#if actor.profile_path}
			<img
				src={`https://www.themoviedb.org/t/p/w235_and_h235_face${actor.profile_path}`}
				alt="Cast"
				class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
			/>
		{:else}
			<img src="https://www.fillmurray.com/235/200" alt="Poster Path" class="w-full h-[250px]" />
		{/if}
	</div>
	<div class="flex flex-col pt-3 px-3 space-y-1 bg-base-200 rounded-lg">
		<span class="text-base font-semibold">{actor.character}</span>
		<span class="text-sm">{actor.name}</span>
		<span class="text-md">Popularity : {actor.popularity}</span>
	</div>
</a>
