<script lang="ts">
	import type { Actor } from 'src/types/Actor';
	export let actor: Actor;
</script>

<a
	href={`actors/${actor.id}`}
	class="flex flex-col w-full h-full hover:opacity-90 duration-300 text-primary-content bg-base-200"
>
	{#if actor.profile_path}
		<img
			src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`}
			alt="Actor"
			class="w-full h-full"
		/>
	{:else}
		<img src="https://www.fillmurray.com/235/200" alt="Actor" class="w-full h-full object-cover" />
	{/if}
	<div class="flex flex-col py-3 pl-3 pr-2 space-y-2 shadow-2xl">
		<span class="font-os-bold">{actor.name}</span>
		<span class="truncate font-os-regular">{actor.known_for.map((movie) => movie.title)}</span>
	</div>
</a>
