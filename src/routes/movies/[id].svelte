<script>
	import ImageCard from '$lib/ImageCard.svelte';
</script>

<!-- Movie Sections -->
<div class="flex mx-[2.5rem] py-[1.875rem]">
	<div class="flex-shrink-0">
		<img
			src="https://flxt.tmsimg.com/assets/p8282918_b_v13_bf.jpg"
			alt="Poster Image"
			class="w-[300px] h-[450px] rounded-2xl hover:opacity-90 hover:cursor-pointer transition-all duration-300 ease-in-out"
		/>
	</div>
	<div class="mx-[40px]">
		<div>
			<div class="text-[34px] tracking-wide">
				<span class="mr-3 font-bold">The Walking Dead</span><span>(2010)</span>
			</div>
			<div class="">
				<span>Adventure, Action, Fantasy & Drama</span>
				<span class="mx-2">&bull;</span>
				<span>42min</span>
			</div>
		</div>
		<div class="mt-5">
			<div class="flex items-center">
				<span class="pr-3">85%</span>
				<div class="flex items-center justify-center space-x-2 text-white">
					<div class="relative group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-12 h-12 p-4 transition-all duration-200 ease-linear bg-gray-900 rounded-full hover:cursor-pointer hover:bg-gray-700 hover:scale-105"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
						<!-- <OnHoverComponent message="Mark As Favorite" /> -->
					</div>
					<div class="relative group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-12 h-12 p-4 transition-all duration-200 ease-linear bg-gray-900 rounded-full hover:cursor-pointer hover:bg-gray-700 hover:scale-105"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
						<!-- <OnHoverComponent message="Add To WatchList" /> -->
					</div>
					<div class="relative group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-12 h-12 p-4 transition-all duration-200 ease-linear bg-gray-900 rounded-full hover:cursor-pointer hover:bg-gray-700 hover:scale-105"
							fill="none"
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
						<!-- <OnHoverComponent message="Rate This Movie" /> -->
					</div>
					<button
						class="flex p-3 space-x-2 text-gray-900 duration-300 border border-gray-800 rounded-full whitespace-nowrap hover:text-gray-200 hover:bg-gray-800"
						on:click={() => {}}
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
			<p>
				Lorem ipsum dolor sit ametm, cum at magnam vero optio quia reprehenderit. Blanditiis ab
				neque fugit quasi atque maxime architecto totam exercitationem? Ducimus fuga cum a
				consectetur illum aut eius officia perferendis nulla, placeat nisi voluptatibus? Expedita
				suscipit libero sequi perspiciatis, ab nisi aliquam veniam vitae modi non a quis cumque
				harum adipisci fuga omnis dignissimos vero, sunt provident et aliquid nemo temporibus qui?
				Doloremque labore voluptates fuga accusamus asperiores repellat neque dolorum reiciendis,
				pariatur eaque rerum cupiditate ipsum dicta.
			</p>
		</div>
		<div class="flex space-x-10">
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Frank Darabont</span>
				<span class="text-xs">Creator</span>
			</div>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Frank Darabont</span>
				<span class="text-xs">Creator</span>
			</div>
			<div class="flex flex-col">
				<span class="text-sm font-semibold">Frank Darabont</span>
				<span class="text-xs">Creator</span>
			</div>
		</div>
	</div>
</div>
<!-- Actors Sections -->
<div class="py-[0.875rem]">
	<div
		class="flex mx-[2.5rem] py-[1.5rem] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600 hover:cursor-pointer scrollbar-track-gray-100 scrollbar-track-rounded-full overflow-x-scroll space-x-5"
	>
		<div class="border border-gray-500 rounded-lg">
			<a href="/actors/1">
				<div class="w-[190px] h-[230px]">
					<img
						src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
						alt="Cast Image"
						class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
					/>
				</div>
				<div class="flex flex-col p-3 space-y-1 bg-gray-100 rounded-lg">
					<span class="text-base font-semibold">Hamido Hamid</span>
					<span class="text-sm">Jason Statham</span>
					<span class="text-sm text-gray-500">160 Episodes</span>
				</div>
			</a>
		</div>
		<div class="border border-gray-500 rounded-lg">
			<a href="/actors/1">
				<div class="w-[190px] h-[230px]">
					<img
						src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
						alt="Cast Image"
						class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
					/>
				</div>
				<div class="flex flex-col p-3 space-y-1 bg-gray-100 rounded-lg">
					<span class="text-base font-semibold">Hamido Hamid</span>
					<span class="text-sm">Jason Statham</span>
					<span class="text-sm text-gray-500">160 Episodes</span>
				</div>
			</a>href
		</div>
		<div class="border border-gray-500 rounded-lg">
			<a href="/actors/1">
				<div class="w-[190px] h-[230px]">
					<img
						src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
						alt="Cast Image"
						class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
					/>
				</div>
				<div class="flex flex-col p-3 space-y-1 bg-gray-100 rounded-lg">
					<span class="text-base font-semibold">Hamido Hamid</span>
					<span class="text-sm">Jason Statham</span>
					<span class="text-sm text-gray-500">160 Episodes</span>
				</div>
			</a>href
		</div>
		<div class="border border-gray-500 rounded-lg">
			<a href="/actors/1">
				<div class="w-[190px] h-[230px]">
					<img
						src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
						alt="Cast Image"
						class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
					/>
				</div>
				<div class="flex flex-col p-3 space-y-1 bg-gray-100 rounded-lg">
					<span class="text-base font-semibold">Hamido Hamid</span>
					<span class="text-sm">Jason Statham</span>
					<span class="text-sm text-gray-500">160 Episodes</span>
				</div>
			</a>href
		</div>
		<div class="border border-gray-500 rounded-lg">
			<a href="/actors/1">
				<div class="w-[190px] h-[230px]">
					<img
						src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
						alt="Cast Image"
						class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
					/>
				</div>
				<div class="flex flex-col p-3 space-y-1 bg-gray-100 rounded-lg">
					<span class="text-base font-semibold">Hamido Hamid</span>
					<span class="text-sm">Jason Statham</span>
					<span class="text-sm text-gray-500">160 Episodes</span>
				</div>
			</a>href
		</div>
		<div class="border border-gray-500 rounded-lg">
			<a href="/actors/1">
				<div class="w-[190px] h-[230px]">
					<img
						src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
						alt="Cast Image"
						class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
					/>
				</div>
				<div class="flex flex-col p-3 space-y-1 bg-gray-100 rounded-lg">
					<span class="text-base font-semibold">Hamido Hamid</span>
					<span class="text-sm">Jason Statham</span>
					<span class="text-sm text-gray-500">160 Episodes</span>
				</div>
			</a>href
		</div>
		<div class="border border-gray-500 rounded-lg">
			<a href="/actors/1">
				<div class="w-[190px] h-[230px]">
					<img
						src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
						alt="Cast Image"
						class="object-cover w-full h-full transition duration-300 rounded-tl-lg rounded-tr-lg hover:opacity-95"
					/>
				</div>
				<div class="flex flex-col p-3 space-y-1 bg-gray-100 rounded-lg">
					<span class="text-base font-semibold">Hamido Hamid</span>
					<span class="text-sm">Jason Statham</span>
					<span class="text-sm text-gray-500">160 Episodes</span>
				</div>
			</a>href
		</div>
	</div>
</div>
<!-- Images Sections -->
<div class="px-10 py-7">
	<span class="text-xl tracking-wider text-gray-800 uppercase font-roboto">Images</span>
</div>
<div
	class="grid grid-cols-1 gap-0 px-6 md:gap-5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center"
>
	<ImageCard />
	<ImageCard />
	<ImageCard />
	<ImageCard />
	<ImageCard />
	<ImageCard />
</div>
