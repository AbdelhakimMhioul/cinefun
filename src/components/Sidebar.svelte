<script>
</script>

<aside
	class="fixed top-0 h-screen w-[4.5rem] font-os-semibold border-r border-gray-500 bg-base-200 text-secondary-content flex flex-col items-center"
>
	<!-- Theme Toggle -->
	<button class="my-5 btn border-none">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-7 w-7"
			viewBox="0 0 50 50"
			data-set-theme="light"
			data-act-class="hidden"
		>
			<path
				d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
				fill="currentColor"
			/>
		</svg>
		<svg
			class="h-7 w-7"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			data-set-theme="dark"
			data-act-class="hidden"
		>
			<circle cx="11.9998" cy="11.9998" r="5.75375" fill="currentColor" />
			<g>
				<circle
					cx="3.08982"
					cy="6.85502"
					r="1.71143"
					transform="rotate(-60 3.08982 6.85502)"
					fill="currentColor"
				/>
				<circle
					cx="3.0903"
					cy="17.1436"
					r="1.71143"
					transform="rotate(-120 3.0903 17.1436)"
					fill="currentColor"
				/>
				<circle cx="12" cy="22.2881" r="1.71143" fill="currentColor" />
				<circle
					cx="20.9101"
					cy="17.1436"
					r="1.71143"
					transform="rotate(-60 20.9101 17.1436)"
					fill="currentColor"
				/>
				<circle
					cx="20.9101"
					cy="6.8555"
					r="1.71143"
					transform="rotate(-120 20.9101 6.8555)"
					fill="currentColor"
				/>
				<circle cx="12" cy="1.71143" r="1.71143" fill="currentColor" />
			</g>
		</svg>
	</button>
	<!-- Side Menus -->
	<div class="flex flex-col space-y-4 text-xs">
		<a href="/movies" class="sidebar__button">
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
					d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
				/>
			</svg>
			<span>Movies</span>
		</a>
		<a href="/actors" class="sidebar__button">
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
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
			<span>Actors</span>
		</a>
		<a href="/tvshows" class="sidebar__button">
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
					d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
				/>
			</svg>
			<span>TV Shows</span>
		</a>
	</div>
</aside>
