<script lang="ts">
	const props = [
		{
			title: 'Hear the Music, Not the Noise',
			description:
				'Crystal-clear sound designed for live shows. Stay fully immersed in every beat, riff, and lyric.',
			num: '01'
		},
		{
			title: 'Tune Out Distractions',
			description:
				'Reduces unwanted noise, bringing the music to the forefront. Enjoy every moment, free from distractions.',
			num: '02'
		},
		{
			title: 'All-Day Comfort',
			description:
				'Lightweight and nearly invisible, Plugz fits effortlessly for all-day wear. Pure sound, no interruptions.',
			num: '03'
		},
		{
			title: 'Premium Sound, Affordable Price',
			description:
				'Top-notch sound without the premium price tag. Concert-quality sound accessible to all.',
			num: '04'
		}
	];
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-6">
		<p class="text-sm font-medium tracking-widest text-brand-teal uppercase">Why Plugz</p>
		<h2
			class="mt-3 max-w-[30ch] text-4xl font-semibold tracking-tight text-text-primary text-balance sm:text-5xl"
		>
			Elevate Your Experience
		</h2>
		<div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<div class="row-span-2 flex flex-col justify-between rounded-3xl bg-brand-dark p-8">
				<div>
					<p class="font-mono text-sm text-brand-teal">01</p>
					<h3 class="mt-4 text-2xl font-semibold tracking-tight text-white">
						{props[0].title}
					</h3>
					<p class="mt-3 text-base text-pretty text-zinc-400">{props[0].description}</p>
				</div>
				<img
					src="/img/product-photos/elevate-earplugs-closeup.png"
					alt=""
					class="mt-8 w-full rounded-2xl object-contain"
				/>
			</div>
			<div class="rounded-3xl bg-surface-tertiary p-8">
				<p class="font-mono text-sm text-brand-teal">02</p>
				<h3 class="mt-4 text-xl font-semibold text-text-primary">{props[1].title}</h3>
				<p class="mt-2 text-sm text-pretty text-text-secondary">{props[1].description}</p>
			</div>
			<div class="rounded-3xl bg-surface-tertiary p-8">
				<p class="font-mono text-sm text-brand-teal">03</p>
				<h3 class="mt-4 text-xl font-semibold text-text-primary">{props[2].title}</h3>
				<p class="mt-2 text-sm text-pretty text-text-secondary">{props[2].description}</p>
			</div>
			<div class="rounded-3xl bg-brand-teal/5 p-8 ring-1 ring-brand-teal/10 sm:col-span-2">
				<div class="flex items-start gap-8">
					<div>
						<p class="font-mono text-sm text-brand-teal">04</p>
						<h3 class="mt-4 text-xl font-semibold text-text-primary">{props[3].title}</h3>
						<p class="mt-2 text-base text-pretty text-text-secondary">
							{props[3].description}
						</p>
					</div>
					<p class="shrink-0 text-5xl font-semibold tracking-tight text-brand-teal tabular-nums">
						$14.99
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
