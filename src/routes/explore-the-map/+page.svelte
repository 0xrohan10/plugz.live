<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { venues } from '$lib/data/venues';
</script>

<svelte:head>
	<title>Explore the Map | Plugz</title>
	<meta
		name="description"
		content="Find Plugz vendors near you. Explore our interactive map to locate venues with Plugz vending machines."
	/>
</svelte:head>

<section class="bg-brand-dark py-24">
	<div class="mx-auto max-w-7xl px-6 text-center">
		<p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
			Find Us Near You
		</p>
		<h1 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">Explore the Map</h1>
		<p class="mx-auto mt-4 max-w-xl text-base text-slate-400">
			Use our interactive map to search for Plugz vendors near you.
		</p>
	</div>
</section>

<section class="py-16">
	<div class="mx-auto max-w-7xl px-6">
		<div class="overflow-hidden rounded-2xl border border-border">
			<iframe
				title="Plugz Venue Locations"
				src="https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID"
				width="100%"
				height="500"
				class="w-full"
				style="border:0; min-height: 500px;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>

		<div class="mt-12 text-center">
			<Button href="/partners" size="lg">I Want Plugz Available in My Venue</Button>
		</div>
	</div>
</section>

<section class="bg-surface-secondary py-16">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="mb-8 text-center text-2xl font-bold text-text-primary">Our Venue Partners</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each venues as venue}
				<div class="rounded-xl border border-border-light bg-surface px-5 py-4">
					<p class="font-medium text-text-primary">{venue.name}</p>
					<p class="text-sm text-text-tertiary">{venue.city}, {venue.state}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
