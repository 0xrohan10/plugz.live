<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="bg-brand-dark py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="text-center lg:text-left">
				<p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
					Find Us Near You
				</p>
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore the Map</h2>
				<p class="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
					Use our interactive map to search for Plugz vendors near you. Available at the largest
					concerts and venues worldwide.
				</p>
				<div class="mt-8">
					<Button href="/explore-the-map" size="lg">Find a Venue</Button>
				</div>
			</div>
			<div class="flex justify-center">
				<img
					src="/img/product-photos/elevate-case-side.png"
					alt="Plugz Elevate 2.0"
					class="w-full max-w-xs opacity-90"
				/>
			</div>
		</div>
	</div>
</section>
