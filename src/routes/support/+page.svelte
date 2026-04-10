<script lang="ts">
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/Button.svelte';
	import FormField from '$lib/components/ui/FormField.svelte';
	import { venues } from '$lib/data/venues';

	let formData = $derived(page.form);

	const assistanceTypes = [
		{ label: 'General Inquiry', value: 'general' },
		{ label: 'Product Issue', value: 'product-issue' },
		{ label: 'Refund Request', value: 'refund' },
		{ label: 'Vending Machine Issue', value: 'machine-issue' },
		{ label: 'Partnership Inquiry', value: 'partnership' },
		{ label: 'Other', value: 'other' }
	];

	const venueOptions = venues.map((v) => ({
		label: `${v.name} — ${v.city}, ${v.state}`,
		value: v.name
	}));
</script>

<svelte:head>
	<title>Support | Plugz</title>
	<meta
		name="description"
		content="Get help from the Plugz team. Contact us for support, refunds, or partnership inquiries."
	/>
</svelte:head>

<section class="py-24">
	<div class="mx-auto max-w-xl px-6">
		<div class="text-center">
			<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
				We're Here to Help
			</p>
			<h1 class="text-4xl font-bold tracking-tight text-text-primary">Support</h1>
			<p class="mt-4 text-base text-text-secondary">
				Have a question or need assistance? Fill out the form below and we'll get back to you.
			</p>
		</div>

		{#if formData?.success}
			<div class="mt-12 rounded-xl border border-brand-teal/20 bg-brand-teal/5 p-8 text-center">
				<div class="text-4xl">✓</div>
				<h3 class="mt-4 text-xl font-semibold text-text-primary">Message Sent</h3>
				<p class="mt-2 text-sm text-text-secondary">We'll get back to you as soon as possible.</p>
			</div>
		{:else}
			<form method="POST" use:enhance class="mt-12 space-y-5">
				<div class="grid gap-5 sm:grid-cols-2">
					<FormField
						label="First Name"
						name="firstName"
						required
						error={formData?.errors?.firstName}
					/>
					<FormField
						label="Last Name"
						name="lastName"
						required
						error={formData?.errors?.lastName}
					/>
				</div>
				<div class="grid gap-5 sm:grid-cols-2">
					<FormField
						label="Email"
						name="email"
						type="email"
						required
						error={formData?.errors?.email}
					/>
					<FormField label="Phone" name="phone" type="tel" />
				</div>
				<div class="grid gap-5 sm:grid-cols-2">
					<FormField
						label="How Can We Assist?"
						name="assistanceType"
						type="select"
						options={assistanceTypes}
						placeholder="Select a topic"
					/>
					<FormField
						label="Venue"
						name="venue"
						type="select"
						options={venueOptions}
						placeholder="Select a venue"
					/>
				</div>
				<FormField label="Last 4 Digits of Card Used" name="cardLast4" placeholder="0000" />
				<FormField
					label="Message"
					name="message"
					type="textarea"
					required
					placeholder="Tell us how we can help..."
					error={formData?.errors?.message}
				/>
				<Button type="submit" class="w-full">Submit</Button>
			</form>
		{/if}
	</div>
</section>
