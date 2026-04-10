<script lang="ts">
	import { page } from '$app/state';
	import VenueApplicationForm from '$lib/components/partners/VenueApplicationForm.svelte';

	let formData = $derived(page.form);
</script>

<svelte:head>
	<title>Vendor Application | Plugz</title>
	<meta
		name="description"
		content="Apply to become a Plugz vendor. Bring premium hearing protection to your venue."
	/>
</svelte:head>

<section class="py-24">
	<div class="mx-auto max-w-xl px-6">
		<div class="text-center">
			<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
				Get Started
			</p>
			<h1 class="text-4xl font-bold tracking-tight text-text-primary">
				Vendor / Venue Application
			</h1>
			<p class="mt-4 text-base leading-relaxed text-text-secondary">
				Having Plugz available in your venue is an easy way to increase your revenue and improve
				guest experience. Tell us a bit about your venue below and we'll reach out quickly with next
				steps.
			</p>
		</div>

		<div class="mt-12">
			<VenueApplicationForm errors={formData?.errors ?? {}} success={formData?.success ?? false} />
		</div>
	</div>
</section>
