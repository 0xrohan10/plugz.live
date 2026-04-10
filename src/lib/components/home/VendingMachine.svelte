<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label="Convenience">State-of-the-Art Vending Machines</SectionHeading>

		<p class="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-text-secondary">
			Our autonomous, cash-free vending machines offer premium, musician-grade earplugs at the tap
			of a button. Designed for concert-goers who demand crystal-clear sound and unbeatable
			protection. No planning required — just pure, uninterrupted music.
		</p>

		<div class="mt-16 grid gap-8 sm:grid-cols-3">
			{#each [{ step: '01', title: 'Find a Machine', desc: 'Located at the biggest venues and concert halls worldwide.' }, { step: '02', title: 'Tap to Purchase', desc: 'Quick, contactless payment. No cash, no hassle.' }, { step: '03', title: 'Enjoy the Show', desc: 'Premium hearing protection, ready in seconds.' }] as item}
				<div class="text-center">
					<div
						class="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-teal/10 text-sm font-bold text-brand-teal"
					>
						{item.step}
					</div>
					<h3 class="mt-4 text-lg font-semibold text-text-primary">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
