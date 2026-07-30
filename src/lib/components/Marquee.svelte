<script>
	import Marquee from 'svelte-fast-marquee';

	let items = [
		{ id: 1, name: 'Black & Grey' },
		{ id: 2, name: 'Fine Line' },
		{ id: 3, name: 'Traditional' },
		{ id: 4, name: 'Neo-Traditional' },
		{ id: 5, name: 'Realism' },
		{ id: 6, name: 'Script & Lettering' },
		{ id: 7, name: 'Anime' },
		{ id: 8, name: 'Watercolor' },
		{ id: 9, name: 'Full Color' },
		{ id: 10, name: 'Piercings' }
	];
</script>

<div id="slider" class="small-border bg-transparent">
	<Marquee
		speed={60}
		gap="44px"
		class="border-[rgb(35, 35, 35)] py-4 font-space-mono font-bold tracking-widest uppercase"
	>
		{#each items as item (item.id)}
			<p>{item.name}</p>
			<p>✦</p>
		{/each}
	</Marquee>
</div>
