<script lang="ts">
	import { resolve } from '$app/paths';

	let { count }: { count: number } = $props();

	const randomNum = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const randomPlaceholder = () => {
		const width = 400;
		const height = randomNum(300, 500);
		return {
			src: `https://placehold.co/${width}x${height}/171717/f2f0ec?text=Tattoo`,
			width,
			height
		};
	};
</script>

<div class="masonry-grid">
	{#each Array.from({ length: count }) as _, i (i)}
		{@const img = randomPlaceholder()}
		<a href={resolve('/')}>
			<img
				src={img.src}
				width={img.width}
				height={img.height}
				alt="Placeholder tattoo"
				class="masonry-item"
			/>
		</a>
	{/each}
</div>

<!-- Fall back code -->
<!-- <div class="sm:columns-3 columns-2 gap-3 lg:columns-4">
		{#each Array.from({ length: count }) as _, i (i)}
			{@const img = randomPlaceholder()}
			<a href={resolve('/')}>
				<img
					src={img.src}
					width={img.width}
					height={img.height}
					alt="Placeholder tattoo"
					class="mb-3 block break-inside-avoid"
				/>
			</a>
		{/each}
	</div> -->

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
		display: inline-block;
		width: 100%;
	}
</style>
