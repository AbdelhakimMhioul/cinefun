<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	import '../app.css';
</script>

<!-- <LoginModal {setShowLoginModal} {showLoginModal} />
<RegisterModal {setShowRegisterModal} {showRegisterModal} /> -->
<Sidebar />
<Navbar />
<slot />
<Footer />
