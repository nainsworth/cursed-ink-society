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

<div class="relative">
	<div class="sm:columns-3 columns-2 gap-3 lg:columns-4">
		{#each Array.from({ length: count }) as _, i (i)}
			{@const img = randomPlaceholder()}
			<a href={resolve('/')}>
				<img
					src={img.src}
					width={img.width}
					height={img.height}
					alt="Placeholder tattoo {i + 1}"
					class="mb-3 block break-inside-avoid"
				/>
			</a>
		{/each}
	</div>
	<div
		class=" absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background to-transparent"
	></div>
</div>
