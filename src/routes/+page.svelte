<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';

	import { artists } from '$lib/data/artists';
	import { resolve } from '$app/paths';
</script>

<Hero />
<Marquee />

<section id="artists" class="px-10 pt-20 pb-10 small-border">
	<div class="mx-auto max-w-7xl space-y-8">
		<h2 class="font-anton text-6xl text-primary uppercase">The Artists</h2>

		<div class="flex gap-6">
			{#each artists.filter((a) => a.role === 'Artist' || a.role === 'Apprentice') as artist (artist.slug)}
				<a href={resolve('/')} class="text-center font-space-mono uppercase transition-transform duration-100 hover:scale-110">
					<img
						src={artist.image}
						alt={artist.name}
						class="h-128 w-full object-cover hover:drop-shadow-lg hover:drop-shadow-primary/50"
					/>
					<div class="mt-4 ">
						<p class="text-sm font-bold text-primary">{artist.name}</p>
						<p class="text-xs">{artist.role}</p>
					</div>
				</a>
			{/each}
		</div>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4"></div>
	</div>
</section>
