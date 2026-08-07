<script>
	import { resolve } from '$app/paths';
	import Masonry from './Masonry.svelte';
</script>

<section class="small-border mx-auto max-w-7xl space-y-10">
	<h2>Recent Ink</h2>
	<Masonry count={8} />
	<div class="text-center">
		<a href={resolve('/tattoos')} class="btn-primary">See Full Gallery</a>
	</div>
</section>
