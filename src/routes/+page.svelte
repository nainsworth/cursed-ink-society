<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';

	import { artists } from '$lib/data/artists';
	import { resolve } from '$app/paths';

	const piercer = artists.find((artist) => artist.role === 'Piercer');
</script>

<Hero />
<Marquee />

<section id="artists" class="small-border px-10 py-20">
	<div class="mx-auto max-w-7xl space-y-8">
		<h2>The Artists</h2>
		<p class="max-w-130 leading-7 text-tertiary">
			Each artists books independently and have their unique styles. Select an artist to reach out
			directly.
		</p>
		<div class="flex gap-6">
			{#each artists.filter((a) => a.role === 'Artist' || a.role === 'Apprentice') as artist (artist.slug)}
				<a
					href={resolve('/')}
					class="text-center font-space-mono uppercase transition-transform duration-100 hover:scale-110"
				>
					<img
						src={artist.image}
						alt={artist.name}
						class="h-128 w-full object-cover hover:drop-shadow-lg hover:drop-shadow-primary/50"
					/>
					<div class="mt-4">
						<p class="font-bold text-primary">{artist.name}</p>
						<p class="text-sm">{artist.role}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="small-border px-10 py-20">
	<div class="mx-auto max-w-4xl">
		<div class="flex items-center justify-between">
			<div class="max-w-xl">
				<h2 class="mb-4! leading-24">Body <br /> Piercings</h2>
				<p class="mb-10 leading-7 text-tertiary">
					Body piercings by our resident piercer. Transparent pricing, implant-grade jewelry, and a
					sterile studio — walk-ins welcome during open hours.
				</p>
				<a href={resolve('/piercings')} class="btn-primary">See Pricing & Gallery</a>
			</div>

			{#if piercer}
				<a
					href={resolve('/')}
					class="text-center font-space-mono uppercase transition-transform duration-100 hover:scale-110"
				>
					<img
						src={piercer.image}
						alt={piercer.name}
						class="h-118 w-full object-cover hover:drop-shadow-lg hover:drop-shadow-primary/50"
					/>
					<div class="mt-4">
						<p class="font-bold text-primary">{piercer.name}</p>
						<p class="text-sm">{piercer.role}</p>
					</div>
				</a>
			{/if}
		</div>
	</div>
</section>

<style>
	h2 {
		font-family: var(--font-anton);
		font-size: 6rem;
		color: var(--color-primary);
		text-transform: uppercase;
		margin: 0;
	}
</style>
