<script lang="ts">
	let {
		label,
		name,
		type = 'text',
		required = false,
		placeholder = '',
		value = $bindable(''),
		options = [],
		error = '',
		class: className = ''
	}: {
		label: string;
		name: string;
		type?: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'number';
		required?: boolean;
		placeholder?: string;
		value?: string;
		options?: { label: string; value: string }[];
		error?: string;
		class?: string;
	} = $props();

	const inputClasses =
		'w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal';
</script>

<div class={className}>
	<label for={name} class="mb-1.5 block text-sm font-medium text-text-primary">
		{label}{#if required}<span class="text-red-500"> *</span>{/if}
	</label>

	{#if type === 'select'}
		<select id={name} {name} {required} bind:value class={inputClasses}>
			<option value="" disabled>{placeholder || 'Select...'}</option>
			{#each options as opt}
				<option value={opt.value}>{opt.label}</option>
			{/each}
		</select>
	{:else if type === 'textarea'}
		<textarea id={name} {name} {required} {placeholder} bind:value rows="4" class={inputClasses}
		></textarea>
	{:else}
		<input id={name} {name} {type} {required} {placeholder} bind:value class={inputClasses} />
	{/if}

	{#if error}
		<p class="mt-1 text-sm text-red-500">{error}</p>
	{/if}
</div>
