<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	const benefits = [
		{
			title: 'Earn Commission on Every Sale',
			description:
				"As a Plugz affiliate, you'll earn a competitive commission on every sale made through your referral link. The more you promote, the more you earn."
		},
		{
			title: 'Promote a Product You Believe In',
			description:
				'Plugz is all about enhancing the live music experience. Our premium, musician-grade earplugs are trusted by concert-goers worldwide. Share a product you can truly stand behind.'
		},
		{
			title: 'Easy to Share',
			description:
				"With ready-to-use marketing materials and social media assets, promoting Plugz is a breeze. Whether you're sharing on your blog, social media, or directly with your audience."
		},
		{
			title: 'Track Your Success',
			description:
				'Our affiliate dashboard makes it easy to track your referrals, commissions, and payouts. Stay in control and watch your earnings grow in real-time.'
		}
	];

	const steps = [
		{
			step: '01',
			title: 'Sign Up',
			description:
				"Fill out the form to join our affiliate team. Once approved, you'll receive your unique referral link and access to our affiliate dashboard."
		},
		{
			step: '02',
			title: 'Promote Plugz',
			description:
				'Share your link on social media, your website, or directly with friends and followers. Use our marketing materials to make it easy.'
		},
		{
			step: '03',
			title: 'Earn Commission',
			description:
				"For every sale made through your link, you'll earn a commission. Earnings are tracked in real-time, and payouts are made on a regular basis."
		}
	];
</script>

<svelte:head>
	<title>Affiliate Program | Plugz</title>
	<meta
		name="description"
		content="Join the Plugz affiliate team. Earn commission promoting premium, musician-grade earplugs."
	/>
</svelte:head>

<section class="bg-brand-dark py-32">
	<div class="mx-auto max-w-7xl px-6 text-center">
		<p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
			Affiliate Program
		</p>
		<h1 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">
			Ready to Earn with Plugz?
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
			Where your passion for music meets the opportunity to earn. Join our affiliate team and earn
			commission on every sale through your unique link.
		</p>
		<div class="mt-8 flex justify-center gap-4">
			<Button href="#how-it-works" variant="primary" size="lg">Learn More</Button>
			<Button
				href="#how-it-works"
				variant="ghost"
				size="lg"
				class="text-white hover:bg-white/10 hover:text-white"
			>
				Sign Up Now
			</Button>
		</div>
	</div>
</section>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label="Benefits">Why Join the Plugz Affiliate Team?</SectionHeading>

		<div class="mt-16 grid gap-8 sm:grid-cols-2">
			{#each benefits as benefit}
				<Card>
					<h3 class="text-lg font-semibold text-text-primary">{benefit.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-text-secondary">{benefit.description}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>

<section id="how-it-works" class="bg-surface-secondary py-24">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label="Getting Started">How It Works</SectionHeading>

		<div class="mt-16 grid gap-12 sm:grid-cols-3">
			{#each steps as item}
				<div class="text-center">
					<div
						class="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-teal/10 text-lg font-bold text-brand-teal"
					>
						{item.step}
					</div>
					<h3 class="mt-5 text-xl font-semibold text-text-primary">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<p class="text-base text-text-secondary">
				Ready to get started? Fill out the sign-up form and become part of the Plugz Affiliate Team.
			</p>
			<div class="mt-6">
				<Button href="/partners" size="lg">Get in Touch</Button>
			</div>
		</div>
	</div>
</section>
