<script lang="ts">
	import SocialIcons from '$lib/components/ui/SocialIcons.svelte';

	let mobileOpen = $state(false);

	const navLinks = [
		{ label: 'Venue Partners', href: '/partners' },
		{ label: 'Explore the Map', href: '/explore-the-map' },
		{ label: 'Support', href: '/support' }
	];
</script>

<header class="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-dark/90 backdrop-blur-lg">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
		<a href="/" aria-label="Homepage">
			<img src="/img/logos/logo-teal-cropped.png" alt="Plugz" class="h-8 w-auto" />
		</a>

		<nav class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-4 md:flex">
			<SocialIcons variant="dark" />
		</div>

		<button
			class="flex items-center md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			<svg
				class="size-6 text-zinc-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
			>
				{#if mobileOpen}
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
				{/if}
			</svg>
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-white/10 bg-brand-dark px-6 py-6 md:hidden">
			<nav class="flex flex-col gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-base font-medium text-zinc-400 transition-colors hover:text-white"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="mt-6 border-t border-white/10 pt-6">
				<SocialIcons variant="dark" />
			</div>
		</div>
	{/if}
</header>
