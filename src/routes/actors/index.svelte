<script lang="ts">
	import ActorCard from '$lib/ActorCard.svelte';
</script>

<div class="ml-[4.5rem] bg-gray-100">
	<div class="px-10 py-7">
		<span class="text-xl tracking-wider text-gray-800 uppercase font-roboto">Popular Actors</span>
	</div>
	<div
		id="popular-actors"
		class="grid grid-cols-1 px-6 gap-x-2 gap-y-6 sm:gap-y-6 sm:gap-x-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center"
	>
		<ActorCard /><ActorCard /><ActorCard /><ActorCard /><ActorCard />
		<ActorCard /><ActorCard /><ActorCard /><ActorCard /><ActorCard />
		<ActorCard /><ActorCard /><ActorCard /><ActorCard /><ActorCard />
		<ActorCard /><ActorCard /><ActorCard /><ActorCard /><ActorCard />
	</div>
</div>
