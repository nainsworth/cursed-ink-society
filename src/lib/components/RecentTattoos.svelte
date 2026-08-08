<script>
	import { resolve } from '$app/paths';
	import ImageModal from './ImageModal.svelte';
	import Masonry from './Masonry.svelte';

    let selectedImage = $state(null);
</script>

<section class="small-border mx-auto max-w-7xl space-y-10">
	<h2>Recent Ink</h2>
	<Masonry count={12} type="general" bind:selectedImage />
    <ImageModal bind:selectedImage />
	<div class="text-center">
		<a href={resolve('/tattoos')} class="btn-primary">See Full Gallery</a>
	</div>
</section>
