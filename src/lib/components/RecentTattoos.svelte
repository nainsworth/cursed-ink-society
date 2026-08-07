<script>
	import { resolve } from '$app/paths';
	import Masonry from './Masonry.svelte';
</script>

<section class="small-border mx-auto max-w-7xl space-y-10">
	<h2>Recent Ink</h2>
	<div class="relative">
		<Masonry count={12} />
		<div
			class=" absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-background to-transparent"
		></div>
	</div>
	<div class="text-center">
		<a href={resolve('/tattoos')} class="btn-primary">See Full Gallery</a>
	</div>
</section>
