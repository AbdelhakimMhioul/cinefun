<script lang="ts">
	import SidebarMenu from './SidebarMenu.svelte';
</script>

<aside
	class="fixed top-0 h-screen w-[4rem] md:w-[4.5rem] font-os-semibold border-r border-gray-500 bg-base-200 text-secondary-content flex flex-col items-center"
>
	<!-- Theme Toggle -->
	<button class="my-5 btn border-none">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-7 w-7"
			viewBox="0 0 50 50"
			data-set-theme="dark"
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
			data-set-theme="light"
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
	<div class="relative text-xs h-screen flex flex-col">
		<div class="flex flex-col space-y-4 justify-between items-center">
			<SidebarMenu
				url="/movies"
				title="Movies"
				d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
			/>
			<SidebarMenu
				url="/actors"
				title="Actors"
				d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
			/>
			<SidebarMenu
				url="/tvshows"
				title="TVShows"
				d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
			/>
		</div>
		<div
			class="absolute bottom-0 flex md:hidden flex-col items-center justify-center space-y-6 w-full py-6"
		>
			<a href="https://twitter.com/HkMhl" target="_blank">
				<svg
					version="1.0"
					xmlns="http://www.w3.org/2000/svg"
					class="w-8 h-8 fill-primary-content"
					viewBox="0 0 512.000000 512.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
						<path
							d="M4750 4776 c-19 -7 -147 -70 -285 -138 -137 -69 -278 -138 -312 -153 l-63 -28 -69 31 c-390 174 -872 86 -1184 -217 -245 -237 -377 -542 -394 -909 l-6 -133 -46 6 c-698 93 -1272 473 -1646 1092 -85 141 -109 164 -174 171 -64 6 -103 -10 -141 -58 -43 -54 -107 -177 -135 -260 -28 -83 -55 -249 -55 -341 1 -123 42 -312 94 -426 15 -31 24 -58 22 -60 -2 -3 -43 7 -89 21 -101 31 -140 32 -187 7 -37 -19 -80 -88 -80 -127 0 -35 38 -191 65 -265 107 -299 305 -531 592 -694 l75 -43 -53 -15 c-30 -9 -74 -21 -98 -27 -60 -16 -83 -33 -109 -79 -53 -95 -16 -165 167 -310 201 -160 458 -289 731 -366 52 -15 101 -31 108 -34 9 -5 -13 -25 -65 -58 -163 -107 -313 -166 -517 -204 -90 -17 -162 -22 -381 -26 -308 -5 -339 -10 -380 -71 -30 -44 -33 -107 -9 -158 18 -38 105 -110 201 -168 206 -123 567 -244 958 -320 770 -149 1531 -93 2105 157 279 122 488 266 707 488 434 443 685 937 780 1539 25 161 25 560 -1 748 l-18 132 123 196 c67 108 126 211 132 229 22 72 -18 149 -94 179 -35 14 -55 15 -141 6 -55 -5 -118 -10 -139 -10 l-39 0 125 250 c68 137 127 266 130 287 9 57 -27 122 -85 151 -50 25 -70 26 -120 8z m-290 -491 c0 -2 -38 -81 -85 -176 -91 -184 -99 -216 -67 -279 9 -19 33 -45 52 -58 34 -23 39 -24 174 -17 l139 7 -15 -24 c-87 -136 -103 -172 -103 -238 0 -36 9 -132 19 -215 22 -171 25 -445 7 -590 -67 -533 -293 -994 -688 -1406 -222 -231 -475 -392 -784 -498 -593 -202 -1413 -200 -2117 6 -67 20 -122 39 -122 43 0 4 37 12 82 19 201 31 439 122 610 233 155 102 375 301 398 363 27 70 -1 149 -67 187 -17 11 -83 28 -147 39 -277 47 -536 137 -738 255 -43 25 -80 50 -83 54 -3 5 32 27 77 49 130 62 211 114 235 150 43 64 26 164 -35 207 -12 8 -70 31 -129 50 -178 59 -292 118 -418 216 -70 55 -180 181 -225 258 -66 112 -73 105 98 105 94 0 160 5 183 13 74 26 119 107 100 180 -6 22 -38 72 -71 113 -68 83 -140 221 -167 319 -21 76 -26 341 -7 360 8 8 29 -13 76 -77 442 -595 1105 -957 1861 -1014 137 -10 141 -10 185 13 64 33 85 75 78 158 -25 288 -17 407 34 562 134 401 450 634 834 615 130 -6 213 -29 334 -93 55 -29 97 -44 121 -44 26 0 84 23 196 79 156 78 175 86 175 76z"
						/>
					</g>
				</svg>
			</a>
			<a href="https://github.com/AbdelhakimMhioul/cinefun" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-8 h-8 fill-primary-content"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/>
				</svg>
			</a>
		</div>
	</div>
</aside>
