<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
	import heroVideo from '../lib/assets/hero-video.mp4';

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

<section id="hero" class="relative h-[75vh] w-full overflow-hidden max-h-155">
	<video
		id="hero-video"
		src={heroVideo}
		autoplay
		loop
		muted
		playsinline
		class="absolute inset-0 h-full w-full object-cover"
	></video>

	<div class="gradient absolute inset-0 flex items-center">
		<div class="mx-auto w-full max-w-7xl p-10">
			<div class="mt-12 space-y-4">
				<p class="font-space-mono text-xs tracking-[0.28em]">HOUMA, LOUISIANA</p>
				<h1 class="font-anton text-9xl leading-28 text-primary">
					TATTOOS <br /> <span>& PIERCINGS</span>
				</h1>
				<p class="max-w-md font-archivo leading-[1.6] text-[#b8b5b0]">
					Seven artist and a resident piercer in the heart of Houma. Come as a walk-in or find your
					artist and book directly.
				</p>
				<div class="mt-12 space-x-2">
					<a href="#" class="btn-primary spac">BOOK AN ARTIST</a>
					<a href="#" class="btn-secondary">TATTOO GALLERY</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="slider" class="small-border bg-transparent">
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
</section>

<style>
	span {
		color: transparent;
		-webkit-text-stroke: 6px var(--color-primary);
	}

	.gradient {
		background: linear-gradient(rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.98));
	}

</style>
