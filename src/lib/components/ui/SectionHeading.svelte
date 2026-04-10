<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		label = '',
		class: className = '',
		children
	}: {
		label?: string;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<div class="text-center {className}">
	{#if label}
		<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">{label}</p>
	{/if}
	<h2 class="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
		{@render children()}
	</h2>
</div>
