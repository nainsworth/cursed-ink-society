<script lang="ts">
	import { resolve } from '$app/paths';
	import Xicon from '@lucide/svelte/icons/x';

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
				class="absolute top-0 right-0 p-2 hover:text-primary"
				type="button"
				onclick={() => closeModal()}><Xicon /></button
			>
			<img
				src={selectedImage.src}
				alt="Placeholder"
				class="object-cover md:max-h-[90dvh] lg:max-h-none lg:w-full"
			/>
			<div class="flex max-w-100 flex-col justify-between gap-4 p-6 md:max-w-80">
				<div class="flex flex-col gap-1">
					<p class="mb-2 font-space-mono text-xs uppercase">Style</p>
					<h3>Artist</h3>
					<p class="font-space-mono text-sm font-semibold">@instagram</p>

					<p class="my-2">
						Like this piece? Book directly with Artist through instagram or browse their portfolio.
					</p>
				</div>
				<div class="flex flex-col gap-3 text-center">
					<a href={resolve('/')} class="btn-primary flex-1">Book with artists</a>
					<a href={resolve('/')} class="btn-secondary flex-1 border-[#333333]"
						>View full portfolio</a
					>
				</div>
			</div>
		</div>
	</div>
{/if}
