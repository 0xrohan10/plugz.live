<script lang="ts">
	import { posts } from '$lib/data/blog';
	import { formatDate } from '$lib/utils';
</script>

<svelte:head>
	<title>Soundwaves | Plugz Blog</title>
	<meta
		name="description"
		content="Soundwaves — the Plugz blog. Articles about hearing protection, concert culture, and the live music experience."
	/>
</svelte:head>

<section class="py-24">
	<div class="mx-auto max-w-4xl px-6">
		<div class="text-center">
			<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">Blog</p>
			<h1 class="text-5xl font-bold tracking-tight text-text-primary">Soundwaves</h1>
			<p class="mt-4 text-base text-text-secondary">
				Stories, science, and tips for the live music experience.
			</p>
		</div>

		<div class="mt-16 space-y-8">
			{#each posts as post}
				<a
					href="/blog/{post.slug}"
					class="group block rounded-2xl border border-border-light p-8 transition-all hover:border-border hover:shadow-md"
				>
					<div class="flex items-center gap-3 text-sm text-text-tertiary">
						<span
							class="rounded-full bg-brand-teal/10 px-3 py-0.5 text-xs font-medium text-brand-teal"
						>
							{post.category}
						</span>
						<time datetime={post.date}>
							{formatDate(post.date)}
						</time>
					</div>
					<h2
						class="mt-4 text-2xl font-bold text-text-primary transition-colors group-hover:text-brand-teal"
					>
						{post.title}
					</h2>
					<p class="mt-3 text-base leading-relaxed text-text-secondary">{post.excerpt}</p>
					<span class="mt-4 inline-block text-sm font-medium text-brand-teal">
						Read more &rarr;
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
