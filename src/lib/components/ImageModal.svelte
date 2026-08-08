<script lang="ts">
	import { resolve } from '$app/paths';

	type MasonryImage = { src: string; width: number; height: number };

	let { selectedImage = $bindable(null) }: { selectedImage: MasonryImage | null } = $props();

	const closeModal = () => {
		selectedImage = null;
	};

	const handleCloseClick = (event: MouseEvent) => {
		if (event.target == event.currentTarget) closeModal();
	};

	const handleCloseKey = (event: KeyboardEvent) => {
		if (event.key == 'Escape') closeModal();
	};
</script>

<svelte:window onkeydown={handleCloseKey} />

{#if selectedImage}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex h-full items-center justify-center bg-black/90 p-20"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		onclick={handleCloseClick}
	>
		<div class="grid w-full max-w-245 border border-[#333333] bg-[#0e0e0e]">
			<img
				src={selectedImage.src}
				width={selectedImage.width}
				height={selectedImage.height}
				alt="Selected tattoo"
				class="h-full max-h-[90vh] w-full max-w-[90vw] object-contain"
			/>
			<div class="p-8 flex flex-col justify-between">
				<div class="">
					<h3>Artist</h3>
					<p class="font-space-mono text-sm">Instagram</p>
					<p>
						Like this piece? Book directly with Artist through instagram or browse their portfolio
						to see more of their work.
					</p>
				</div>
				<div class="flex gap-3 text-center flex-col">
					<a href={resolve('/')} class="btn-primary flex-1">Book with artists</a>
					<a href={resolve('/')} class="btn-secondary flex-1 border-[#333333]"
						>View full portfolio</a
					>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.grid {
		grid-template-columns: minmax(0px, 620px) 340px;
	}

    @media (max-width: 880px) {
    .grid {
        grid-template-columns: 1fr !important;
    }
}
</style>
