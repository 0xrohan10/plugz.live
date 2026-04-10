<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative overflow-hidden bg-brand-dark py-32 sm:py-40">
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-teal)_0%,_transparent_70%)] opacity-10"
	></div>
	<div class="relative mx-auto max-w-7xl px-6 text-center">
		<p class="mb-4 text-sm font-medium tracking-[0.2em] text-brand-teal uppercase">
			Premium Musician-Grade Earplugs
		</p>
		<h1
			class="mx-auto max-w-[20ch] text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
		>
			Hear the Show<br /><span class="text-brand-cyan">Not the Noise</span>
		</h1>
		<p class="mx-auto mt-6 max-w-[48ch] text-lg text-pretty text-zinc-400">
			Your ticket to experiencing live music the way it was meant to be heard. Premium earplugs that
			filter out distracting noise, leaving you with crystal-clear audio.
		</p>
		<div class="mt-10 flex items-center justify-center gap-4">
			<Button href="/partners" variant="primary" size="lg">Partner With Us</Button>
			<Button
				href="/explore-the-map"
				variant="ghost"
				size="lg"
				class="text-white hover:bg-white/10 hover:text-white">Find a Venue</Button
			>
		</div>
	</div>
</section>
