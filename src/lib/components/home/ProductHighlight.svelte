<section class="bg-surface-secondary py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<div>
				<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
					Flagship Product
				</p>
				<h2 class="text-4xl font-bold tracking-tight text-text-primary">Plugz Elevate 2.0</h2>
				<p class="mt-2 text-2xl font-semibold text-brand-teal">$14.99 USD</p>
				<p class="mt-6 text-base leading-relaxed text-text-secondary">
					Plugz puts you in the front row, no matter where you stand. Premium, reusable,
					musician-grade earplugs engineered for true concert enthusiasts. Experience sound with
					unmatched clarity and depth, capturing every nuance of the performance.
				</p>
				<ul class="mt-8 space-y-3">
					{#each ['Reusable & long-lasting', 'Lab-tested & certified (ANSI/EU CE)', 'Crystal-clear audio fidelity', 'Lightweight & nearly invisible'] as feature}
						<li class="flex items-center gap-3 text-sm text-text-secondary">
							<svg
								class="size-5 shrink-0 text-brand-teal"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>
							{feature}
						</li>
					{/each}
				</ul>
			</div>

			<div class="flex items-center justify-center">
				<div
					class="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-brand-teal/10 to-brand-cyan/10 p-8"
				>
					<img
						src="/img/product-photos/elevate-case-open-1.png"
						alt="Plugz Elevate 2.0 earplug case open showing earplugs"
						class="w-full"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
