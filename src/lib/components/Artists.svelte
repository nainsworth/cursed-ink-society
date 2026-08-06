<script>
	import { resolve } from '$app/paths';
	import { artists } from '$lib/data/artists';
</script>

<section id="artists" class="small-border section">
	<div class="mx-auto max-w-7xl space-y-8">
		<h2>The Artists</h2>
		<p class="max-w-130 leading-7 text-tertiary">
			Each artists books independently and have their unique styles. Select an artist to reach out
			directly.
		</p>
		<div class="flex flex-wrap justify-center gap-6 text-center">
			{#each artists.filter((a) => a.role === 'Artist' || a.role === 'Apprentice') as artist (artist.slug)}
				<a
					href={artist.instagram}
					class="text-centerfont-space-mono uppercase transition-transform duration-100 hover:scale-110"
				>
					<img
						src={artist.image}
						alt={artist.name}
						class="max-w-22 md:max-w-42  h-86 object-cover hover:drop-shadow-lg hover:drop-shadow-primary/50 md:h-128"
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
