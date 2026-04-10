<script lang="ts">
	import SocialIcons from '$lib/components/ui/SocialIcons.svelte';
	import NewsletterForm from '$lib/components/ui/NewsletterForm.svelte';
</script>

<footer class="border-t border-border bg-surface-secondary">
	<div class="mx-auto max-w-7xl px-6 py-16">
		<div class="grid gap-12 md:grid-cols-3">
			<div>
				<a href="/">
					<img src="/img/logos/logo-teal-cropped.png" alt="Plugz" class="h-8 w-auto" />
				</a>
				<p class="mt-3 text-sm leading-relaxed text-text-secondary">
					Premium, musician-grade earplugs. Hear the show, not the noise.
				</p>
				<SocialIcons class="mt-5" />
			</div>

			<nav>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-text-primary">Navigate</h3>
				<ul class="mt-4 space-y-3">
					<li>
						<a
							href="/partners"
							class="text-sm text-text-secondary transition-colors hover:text-text-primary"
							>Venue Partners</a
						>
					</li>
					<li>
						<a
							href="/blog"
							class="text-sm text-text-secondary transition-colors hover:text-text-primary"
							>Soundwaves</a
						>
					</li>
					<li>
						<a
							href="/explore-the-map"
							class="text-sm text-text-secondary transition-colors hover:text-text-primary"
							>Explore the Map</a
						>
					</li>
					<li>
						<a
							href="/support"
							class="text-sm text-text-secondary transition-colors hover:text-text-primary"
							>Support</a
						>
					</li>
				</ul>
			</nav>

			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-text-primary">
					Stay in the loop
				</h3>
				<p class="mt-4 text-sm text-text-secondary">
					Get news, promos, events and business updates.
				</p>
				<div class="mt-4">
					<NewsletterForm />
				</div>
			</div>
		</div>

		<div
			class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
		>
			<p class="text-xs text-text-tertiary">
				&copy; {new Date().getFullYear()} Plugz. All rights reserved.
			</p>
			<nav class="flex gap-6">
				<a
					href="/affiliate"
					class="text-xs text-text-tertiary transition-colors hover:text-text-secondary"
					>Affiliate Access</a
				>
				<a
					href="/terms-and-conditions"
					class="text-xs text-text-tertiary transition-colors hover:text-text-secondary"
					>Terms &amp; Conditions</a
				>
				<a
					href="/privacy-policy"
					class="text-xs text-text-tertiary transition-colors hover:text-text-secondary"
					>Privacy Policy</a
				>
			</nav>
		</div>
	</div>
</footer>
