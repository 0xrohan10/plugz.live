<script lang="ts">
	import { page } from '$app/state';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let shareUrl = $derived(page.url.href);
</script>

<svelte:head>
	<title>{data.post.title} | Plugz</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<article class="py-24">
	<div class="mx-auto max-w-3xl px-6">
		<header class="mb-12">
			<a
				href="/blog"
				class="mb-6 inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-primary"
			>
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
				Back to Soundwaves
			</a>

			<div class="flex items-center gap-3 text-sm text-text-tertiary">
				<span class="rounded-full bg-brand-teal/10 px-3 py-0.5 text-xs font-medium text-brand-teal">
					{data.post.category}
				</span>
				<time datetime={data.post.date}>
					{formatDate(data.post.date)}
				</time>
			</div>

			<h1 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-text-primary">
				{data.post.title}
			</h1>
		</header>

		<div class="prose prose-slate max-w-none prose-headings:tracking-tight prose-a:text-brand-teal">
			{@html data.post.content}
		</div>

		<div class="mt-12 flex items-center gap-3 border-t border-border pt-8">
			<span class="text-sm text-text-tertiary">Share:</span>
			<a
				href="https://www.facebook.com/sharer/sharer.php?u={shareUrl}"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg border border-border p-2 text-text-tertiary transition-colors hover:text-text-primary"
				aria-label="Share on Facebook"
			>
				<svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
					/>
				</svg>
			</a>
			<a
				href="https://twitter.com/intent/tweet?url={shareUrl}&text={encodeURIComponent(
					data.post.title
				)}"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg border border-border p-2 text-text-tertiary transition-colors hover:text-text-primary"
				aria-label="Share on X"
			>
				<svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
					/>
				</svg>
			</a>
			<a
				href="https://www.linkedin.com/shareArticle?mini=true&url={shareUrl}&title={encodeURIComponent(
					data.post.title
				)}"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg border border-border p-2 text-text-tertiary transition-colors hover:text-text-primary"
				aria-label="Share on LinkedIn"
			>
				<svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
			</a>
		</div>

		{#if data.recentPosts.length > 0}
			<div class="mt-16 border-t border-border pt-12">
				<h2 class="text-2xl font-bold text-text-primary">Recent Posts</h2>
				<div class="mt-6 space-y-4">
					{#each data.recentPosts as post}
						<a
							href="/blog/{post.slug}"
							class="group block rounded-xl border border-border-light p-5 transition-all hover:border-border hover:shadow-sm"
						>
							<h3
								class="font-semibold text-text-primary transition-colors group-hover:text-brand-teal"
							>
								{post.title}
							</h3>
							<p class="mt-1 text-sm text-text-tertiary">
								{formatDate(post.date)}
							</p>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</article>
