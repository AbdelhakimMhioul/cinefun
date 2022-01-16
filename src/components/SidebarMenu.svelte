<script lang="ts">
	export let d: string, title: string, url: string;
</script>

<a href={url} class="sidebar__button">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />
	</svg>
	<span>{title}</span>
</a>
