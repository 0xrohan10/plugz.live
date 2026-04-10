<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: className = '',
		children
	}: {
		class?: string;
		children: Snippet;
	} = $props();
</script>

<div
	class="rounded-2xl border border-border-light bg-surface p-6 transition-shadow hover:shadow-md {className}"
>
	{@render children()}
</div>
