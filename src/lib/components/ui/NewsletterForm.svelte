<script lang="ts">
	let email = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
		email = '';
	}
</script>

<form onsubmit={handleSubmit} class="flex gap-2">
	<input
		type="email"
		bind:value={email}
		placeholder="Enter your email"
		required
		class="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
	/>
	<button
		type="submit"
		class="rounded-lg bg-brand-teal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal/90"
	>
		{submitted ? 'Subscribed!' : 'Sign Up'}
	</button>
</form>
