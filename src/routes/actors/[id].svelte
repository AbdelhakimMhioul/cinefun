<script lang="ts">
	import ActingBox from '$lib/ActingBox.svelte';
	import MovieInActorCard from '$lib/MovieInActorCard.svelte';
	import SocialIcons from '$lib/SocialIcons.svelte';
</script>

<div class="flex space-x-9 pt-5 px-7 text-primary-content">
	<div id="left-side" class="flex flex-col flex-shrink-0">
		<img
			src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y9S3QzI3L5aARP8GYYO86rREKxU.jpg"
			alt="Actor"
			class="rounded-lg w-[300px] h-[450px] shadow-xl"
		/>
		<SocialIcons />
		<span class="block p-4 text-lg font-os-bold">Personal Info</span>
		<div id="personal-info" class="flex flex-col px-4 space-y-4">
			<div>
				<span class="block font-semibold">Known Credits</span>
				<span class="block text-sm">296</span>
			</div>
			<div>
				<span class="block font-semibold">Gender</span>
				<span class="block text-sm">Female</span>
			</div>
			<div>
				<span class="block font-semibold">Birthdate</span>
				<span class="block text-sm">1973-02-12 (48 Y.O)</span>
			</div>
			<div>
				<span class="block font-semibold">Place Of Birth</span>
				<span class="block text-sm">Toronto, Canada</span>
			</div>
			<div>
				<span class="block font-semibold">Also Known For</span>
				<span class="block text-sm">Tara Lyn Charendoff-Strong</span>
				<span class="block text-sm">Tara Lyn Strong</span>
				<span class="block text-sm">qdmqksjdlκ</span>
			</div>
		</div>
	</div>
	<div id="right-side" class="font-os-regular">
		<span class="block py-3 text-4xl font-os-bold">Tara Strong</span>
		<div class="flex flex-col space-y-2">
			<span class="text-lg font-os-semibold">Biography</span>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, accusantium. Odio dolores
				ipsum velit consequatur voluptate facilis non fugiat laborum. Veritatis aliquam quas
				inventore omnis soluta, autem est quibusdam nostrum maxime amet deserunt, ea harum
				asperiores. Odio nisi, distinctio, repudiandae labore accusamus natus maxime, soluta
				perspiciatis velit veniam quidem consectetur!
			</p>
		</div>
		<div>
			<span class="block pt-3 pb-1 font-os-semibold">Known For</span>
			<div
				class="flex py-5 space-x-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600 hover:cursor-pointer scrollbar-track-gray-100 scrollbar-track-rounded-full"
			>
				<MovieInActorCard name="Ice Age" />
				<MovieInActorCard name="Ice Age" />
				<MovieInActorCard name="Ice Age" />
				<MovieInActorCard name="Ice Age" />
				<MovieInActorCard name="Ice Age" />
				<MovieInActorCard name="Ice Age" />
				<MovieInActorCard name="Ice Age" />
				<MovieInActorCard name="Ice Age" />
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
