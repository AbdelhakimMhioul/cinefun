<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	import Logo from '/src/components/Logo.svelte';

	export let title;
</script>

<h1
	class="h-[calc(100vh-10rem)] flex items-center justify-center text-6xl font-os-light space-x-5 text-primary-content"
>
	<Logo width="20" height="20" />
	<span>{title}</span>
</h1>
