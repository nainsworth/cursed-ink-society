<script lang="ts">
	import Xicon from '@lucide/svelte/icons/x';
	import { artists } from '#lib/data/artists.js';
	import type { Work } from '#lib/data/recentWork.js';

	// type MasonryImage = { src: string; width: number; height: number };

	let { selectedImage = $bindable(null) }: { selectedImage: Work | null } = $props();

	const artist = $derived(artists.find((a) => a.slug === selectedImage?.artist));

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
	<div
		class="fixed inset-0 z-50 flex h-full items-center justify-center bg-black/90 p-10"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		onclick={handleCloseClick}
	>
		<div
			class="relative flex flex-col border border-[#333333] bg-[#0e0e0e] md:flex-row lg:w-full lg:max-w-4xl"
		>
			<button
				class="absolute top-0 right-0 bg-black/25 p-2 hover:text-primary md:bg-none"
				type="button"
				onclick={() => closeModal()}><Xicon /></button
			>
			<img
				src={selectedImage.src}
				alt={selectedImage.alt}
				class="max-h-[45dvh] md:max-h-[90dvh] w-full max-w-xl object-cover"
			/>
			<div class="flex max-w-100 flex-col justify-between gap-4 p-6 md:max-w-80">
				<div class="flex flex-col gap-1">
					<p class="mb-2 font-space-mono text-xs uppercase">{selectedImage.style}</p>
					<h3>{artist?.name}</h3>
					<p class="font-space-mono text-sm font-semibold">@{artist?.instagram.split('/').pop()}</p>

					<p class="my-2">
						Like this piece? Book directly with {artist?.name} through instagram or browse their portfolio.
					</p>
				</div>
				<div class="flex flex-col gap-3 text-center">
					<a
						href={artist?.directMessage}
						target="_blank"
						onclick={() => closeModal()}
						class="btn-primary flex-1">Book with {artist?.name}</a
					>
					<a
						href={artist?.instagram}
						target="_blank"
						onclick={() => closeModal()}
						class="btn-secondary flex-1 border-[#333333]">View full portfolio</a
					>
				</div>
			</div>
		</div>
	</div>
{/if}
