<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="bg-surface-secondary py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
					Partnerships
				</p>
				<h2 class="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
					The Trusted Choice for Top Venues
				</h2>
				<p class="mt-4 text-base leading-relaxed text-text-secondary">
					As exclusive partners with world-leading entertainment companies, Plugz is the top choice
					for music lovers at the biggest concerts around the globe. Experience unmatched sound
					quality at your favorite live events.
				</p>
				<div class="mt-8 flex gap-4">
					<Button href="/partners">Partner With Plugz</Button>
				</div>
			</div>

			<div class="flex items-center justify-center">
				<div class="grid grid-cols-2 gap-4">
					<img
						src="/img/product-photos/elevate-case-open-2.png"
						alt="Plugz earplug case"
						class="rounded-2xl"
					/>
					<img
						src="/img/product-photos/elevate-earplugs-closeup.png"
						alt="Plugz earplugs close-up"
						class="rounded-2xl"
					/>
					<img
						src="/img/product-photos/elevate-case-open-3.png"
						alt="Plugz case open view"
						class="rounded-2xl"
					/>
					<img
						src="/img/product-photos/elevate-case-side.png"
						alt="Plugz case side view"
						class="rounded-2xl"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
