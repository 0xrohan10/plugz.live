<script lang="ts">
	import '$lib/styles/app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col font-sans text-text-primary antialiased">
	<Header />
	<main class="flex-1 pt-16">
		{@render children()}
	</main>
	<Footer />
</div>
