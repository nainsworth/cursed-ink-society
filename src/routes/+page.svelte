<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';

	import { artists } from '$lib/data/artists';
</script>

<Hero />
<Marquee />

<section class="p-10">
	<div class="mx-auto max-w-7xl space-y-8">
		<h2 class="font-anton text-5xl text-primary uppercase">The Artists</h2>

		<div class="flex gap-6">
			{#each artists.filter((a) => a.role === 'Artist' || a.role === 'Apprentice') as artist (artist.slug)}
				<div>
					<img src={artist.image} alt={artist.name} class="h-128 w-full object-cover" />
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4"></div>
	</div>
</section>

