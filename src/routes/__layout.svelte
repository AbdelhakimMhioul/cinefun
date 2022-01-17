<script lang="ts">
	import Sidebar from '/src/components/Sidebar.svelte';
	import Navbar from '/src/components/Navbar.svelte';
	import Footer from '/src/components/Footer.svelte';

	import '../app.css';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<svelte:head>
	<title>Cinefun</title>
	<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
</svelte:head>

<Sidebar />
<Navbar />
<main class="ml-[3.5rem] md:ml-[4.5rem] bg-primary pb-5">
	<slot />
</main>
<Footer />
