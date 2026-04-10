<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import VenueApplicationForm from '$lib/components/partners/VenueApplicationForm.svelte';

	const benefits = [
		{
			title: 'Happier Guests, Bigger Profits',
			description:
				'When your guests are comfortable, they stay longer, have more fun, and keep coming back. Plugz cuts out uncomfortable noise and distractions, allowing the music to take center stage. Our vending machines turn under-utilized spaces into revenue generators.'
		},
		{
			title: 'Low Maintenance, Top Tier Support',
			description:
				"We've designed Plugz to be as low-maintenance as possible. With 24/7 support, minimal demands on your staff, and added liability insurance coverage, Plugz offers a comprehensive solution that fits seamlessly into your venue."
		},
		{
			title: 'Quality You Can Count On',
			description:
				"Plugz earplugs aren't just built for comfort — they're built to last. Certified, lab-tested, and compliant with ANSI and EU CE regulations, our reusable hearing protection products deliver top-tier performance you can trust."
		}
	];

	let formData = $derived(page.form);
</script>

<svelte:head>
	<title>Venue Partners | Plugz</title>
	<meta
		name="description"
		content="Partner with Plugz to elevate the guest experience at your venue with premium hearing protection vending machines."
	/>
</svelte:head>

<section class="bg-brand-dark py-32">
	<div class="mx-auto max-w-7xl px-6 text-center">
		<img src="/img/logos/logo-white.png" alt="" class="mx-auto mb-6 h-8 w-auto opacity-50" />
		<p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
			Partnerships
		</p>
		<h1 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">Venue Partners</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
			Elevate the experience with Plugz, the trusted choice of top venues worldwide. Whether you're
			running a sprawling concert arena or an intimate club, Plugz delivers a seamless solution that
			cranks up guest satisfaction and pumps up your revenue.
		</p>
		<div class="mt-8 flex justify-center gap-4">
			<Button href="#apply" variant="primary" size="lg">Apply Now</Button>
			<Button
				href="/explore-the-map"
				variant="ghost"
				size="lg"
				class="text-white hover:bg-white/10 hover:text-white"
			>
				Explore the Map
			</Button>
		</div>
	</div>
</section>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label="Why Partner With Us">We Support Our Venues</SectionHeading>

		<div class="mt-16 grid gap-8 lg:grid-cols-3">
			{#each benefits as benefit}
				<Card>
					<h3 class="text-lg font-semibold text-text-primary">{benefit.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-text-secondary">{benefit.description}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface-secondary py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-start gap-16 lg:grid-cols-2">
			<div>
				<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
					Custom Solutions
				</p>
				<h2 class="text-3xl font-bold tracking-tight text-text-primary">
					Custom-Designed Machines
				</h2>
				<p class="mt-4 text-base leading-relaxed text-text-secondary">
					Our machines are tailor-made for high-traffic spots in large venues. With autonomous,
					self-serve operation and a sleek, one-tap, cloud-connected payment system, Plugz ensures a
					smooth and effortless experience for your guests every time.
				</p>
				<div class="mt-6">
					<Button href="/affiliate" variant="secondary">Or Join Our Affiliate Team &rarr;</Button>
				</div>
			</div>

			<div id="apply">
				<h2 class="mb-6 text-2xl font-bold text-text-primary">Venue Application Form</h2>
				<p class="mb-8 text-sm text-text-secondary">
					Tell us about your venue and we'll reach out with next steps.
				</p>
				<VenueApplicationForm
					errors={formData?.errors ?? {}}
					success={formData?.success ?? false}
				/>
			</div>
		</div>
	</div>
</section>
