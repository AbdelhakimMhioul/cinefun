<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

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

<!-- <LoginModal {setShowLoginModal} {showLoginModal} />
<RegisterModal {setShowRegisterModal} {showRegisterModal} /> -->
<Sidebar />
<Navbar />
<slot />
<Footer />
