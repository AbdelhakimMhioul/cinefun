<script lang="ts">
	import type { Backdrop } from '$lib/types/Movie';

	export let backdrop: Backdrop;
</script>

<div class="relative hover:cursor-pointer">
	<a
		href="#"
		class="absolute inset-0 z-10 flex items-center justify-center text-center text-gray-200 duration-300 bg-base-300 opacity-0 hover:opacity-60 bg-opacity-80"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-10 w-10 hover:animate-ping"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
			/>
		</svg>
	</a>
	<div class="flex flex-wrap content-center w-full h-full">
		<img src={`https://image.tmdb.org/t/p/w500${backdrop.file_path}`} class="w-full" alt="" />
	</div>
</div>
