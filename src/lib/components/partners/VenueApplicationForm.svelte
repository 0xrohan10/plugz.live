<script lang="ts">
	import FormField from '$lib/components/ui/FormField.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { enhance } from '$app/forms';

	let { errors = {}, success = false }: { errors?: Record<string, string>; success?: boolean } =
		$props();

	const venueTypes = [
		{ label: 'Concert Arena', value: 'concert-arena' },
		{ label: 'Theater', value: 'theater' },
		{ label: 'Club / Bar', value: 'club-bar' },
		{ label: 'Festival Grounds', value: 'festival' },
		{ label: 'Stadium', value: 'stadium' },
		{ label: 'Other', value: 'other' }
	];
</script>

{#if success}
	<div class="rounded-xl border border-brand-teal/20 bg-brand-teal/5 p-8 text-center">
		<div class="text-4xl">✓</div>
		<h3 class="mt-4 text-xl font-semibold text-text-primary">Application Submitted</h3>
		<p class="mt-2 text-sm text-text-secondary">
			Thanks for your interest! We'll reach out with next steps shortly.
		</p>
	</div>
{:else}
	<form method="POST" use:enhance class="space-y-5">
		<div class="grid gap-5 sm:grid-cols-2">
			<FormField
				label="Venue / Vendor Name"
				name="venueName"
				required
				placeholder="e.g. Madison Square Garden"
				error={errors.venueName}
			/>
			<FormField
				label="Contact Person"
				name="contactPerson"
				placeholder="Full name"
				error={errors.contactPerson}
			/>
		</div>
		<div class="grid gap-5 sm:grid-cols-2">
			<FormField
				label="Email"
				name="email"
				type="email"
				required
				placeholder="you@venue.com"
				error={errors.email}
			/>
			<FormField label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
		</div>
		<div class="grid gap-5 sm:grid-cols-2">
			<FormField
				label="Venue Type"
				name="venueType"
				type="select"
				options={venueTypes}
				placeholder="Select venue type"
			/>
			<FormField
				label="Venue Capacity"
				name="venueCapacity"
				type="number"
				placeholder="e.g. 20000"
			/>
		</div>
		<FormField label="Location" name="location" placeholder="City, State / Province, Country" />
		<Button type="submit" class="w-full">Submit Application</Button>
	</form>
{/if}
