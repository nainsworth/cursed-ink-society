<script lang="ts">
	import { artists } from '#lib/data/artists.js';
	import { recentWork, type Work } from '#lib/data/recentWork.js';

	type MasonryType = 'general' | 'artist' | 'piercings';

	let {
		count,
		type,
		selectedImage = $bindable(null)
	}: { count: number; type: MasonryType; selectedImage: Work | null } = $props();

	const items = $derived(
		[...recentWork].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count)
	);
</script>

<div class="masonry-grid">
	{#each items as img (img.src)}
		{@const artist = artists.find((a) => a.slug === img.artist)}
		<button
			type="button"
			onclick={() => {
				if (selectedImage?.src !== img.src) selectedImage = img;
			}}
			class="masonry-item relative block text-start transition-transform duration-300 hover:scale-102 hover:shadow-[0_0_8px_var(--color-primary)]"
		>
			<img
				src={img.src}
				width="400"
				alt={img.alt}
				loading="lazy"
				class="h-auto w-full object-cover"
			/>
			<div
				class="absolute inset-x-0 bottom-0 flex h-36 flex-col justify-end bg-linear-to-t from-background to-transparent p-3 font-space-mono text-xs text-tertiary"
			>
				{#if type === 'general'}
					<p class="text-sm font-bold text-primary uppercase">{artist?.name}</p>
					<div class="flex justify-between">
						<p>@{artist?.instagram.split('/').pop()}</p>
						<p class="uppercase hidden sm:block">{img.style}</p>
					</div>
				{:else if type === 'artist'}
					<p class="uppercase">{img.style}</p>
				{:else if type === 'piercings'}
					<!-- <p class="uppercase">{img.style} · 18+?</p> -->
					<p class="uppercase">{img.style}</p>
				{/if}
			</div>
		</button>
	{/each}
</div>

<style>
	.masonry-grid {
		column-count: 4;
		column-width: 11rem;
		column-gap: 1rem;
		width: 100%;
	}

	.masonry-item {
		margin-bottom: 1rem;
		break-inside: avoid;
		display: block;
		width: 100%;
	}
</style>
