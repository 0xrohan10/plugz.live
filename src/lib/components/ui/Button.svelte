<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		class?: string;
		children: Snippet;
		[key: string]: unknown;
	};

	let {
		variant = 'primary',
		size = 'md',
		href,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-lg';

	const variants = {
		primary: 'bg-brand-teal text-white hover:bg-brand-teal/90 shadow-sm',
		secondary: 'bg-surface-tertiary text-text-primary hover:bg-border border border-border',
		ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-tertiary'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-2.5 text-sm',
		lg: 'px-8 py-3 text-base'
	};

	let classes = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
	<a {href} class={classes} {...rest}>
		{@render children()}
	</a>
{:else}
	<button class={classes} {...rest}>
		{@render children()}
	</button>
{/if}
