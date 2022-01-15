<script>
	import MovieCard from '$lib/MovieCard.svelte';
</script>

<div class="ml-[4.5rem] bg-gray-100 mb-5">
	<div class="px-10 py-7">
		<span class="text-xl tracking-wider text-gray-800 uppercase font-roboto">#GENRE</span>
	</div>
	<div
		id="popular-movies"
		class="grid grid-cols-1 px-6 sm:grid-cols-2 sm:gap-y-1 md:grid-cols-3 md:gap-y-2 lg:grid-cols-4 lg:gap-y-3 place-items-center"
	>
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
		<MovieCard />
	</div>
</div>
