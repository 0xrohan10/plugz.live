<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import ValueProps from '$lib/components/home/ValueProps.svelte';
	import ProductHighlight from '$lib/components/home/ProductHighlight.svelte';
	import Testimonial from '$lib/components/home/Testimonial.svelte';
	import PartnershipCta from '$lib/components/home/PartnershipCta.svelte';
	import VendingMachine from '$lib/components/home/VendingMachine.svelte';
	import MapCta from '$lib/components/home/MapCta.svelte';
</script>

<svelte:head>
	<title>Plugz | Premium, Musician-Grade Earplugs</title>
	<meta
		name="description"
		content="Hear the show, not the noise. Premium, musician-grade earplugs for concerts and live events."
	/>
</svelte:head>

<Hero />
<ValueProps />
<ProductHighlight />
<Testimonial />
<PartnershipCta />
<VendingMachine />
<MapCta />
