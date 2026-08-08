<script lang="ts">
	type MasonryType = 'general' | 'artist' | 'piercings';
	type MasonryImage = { src: string; width: number; height: number };

	let {
		count,
		type,
		selectedImage = $bindable(null)
	}: { count: number; type: MasonryType; selectedImage: MasonryImage | null } = $props();

	const randomNum = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const randomPlaceholder = () => {
		const width = 400;
		const height = randomNum(300, 500);
		return {
			src: `https://placehold.co/${width}x${height}/171717/8b8884?text=Tattoo Placeholder`,
			width,
			height
		};
	};
</script>

<div class="masonry-grid">
	{#each Array.from({ length: count }), i (i)}
		{@const img = randomPlaceholder()}
		<button
			type="button"
			onclick={() => {
				if (selectedImage?.src !== img.src) selectedImage = img;
			}}
			class="masonry-item relative block text-start transition-transform duration-300 hover:scale-102 hover:shadow-[0_0_8px_var(--color-primary)]"
		>
			<img
				src={img.src}
				width={img.width}
				height={img.height}
				alt="Placeholder tattoo"
				class="h-auto w-full object-cover"
			/>
			<div
				class="absolute inset-x-0 bottom-0 flex h-36 flex-col justify-end bg-linear-to-t from-background to-transparent p-3 font-space-mono text-xs text-tertiary"
			>
				{#if type === 'general'}
					<p class="text-sm font-bold text-primary uppercase">Artist</p>
					<div class="flex justify-between">
						<p>@instagram</p>
						<p class="uppercase">Style</p>
					</div>
				{:else if type === 'artist'}
					<p class="uppercase">Style</p>
				{:else if type === 'piercings'}
					<p class="uppercase">Style · 18+?</p>
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
