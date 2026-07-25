<script>
	import heroVideo from '../lib/assets/hero-video.mp4';
</script>

<section class="relative h-[75vh] w-full overflow-hidden">
	<video
		id="hero-video"
		src={heroVideo}
		autoplay
		loop
		muted
		playsinline
		class="absolute inset-0 h-full w-full object-cover"
	></video>

	<div class="absolute inset-0 flex items-center gradient">
		<div class="mt-12 space-y-4 m-10">
			<p class="font-space-mono text-xs tracking-[0.28em]">HOUMA, LOUISIANA</p>
			<h1 class="font-anton text-9xl leading-28 text-primary">
				TATTOOS <br /> <span>& PIERCINGS</span>
			</h1>
			<p class="font-archivo max-w-md text-[#b8b5b0] leading-[1.6]">Seven artist and a resident piercer in the heart of Houma. Come as a walk-in or find your artist and book directly.</p>
			<div class="mt-12 space-x-2">
				<a href='#' class="btn-primary spac">BOOK AN ARTIST</a>
				<a href="#" class="btn-secondary">TATTOO GALLERY</a>
			</div>
		</div>
	</div>
</section>

<style>
	span {
		color: transparent;
		-webkit-text-stroke: 6px var(--color-primary);
	}

	.gradient {
		background: linear-gradient(rgba(11, 11, 11, 0.5), rgba(11, 11, 11, 0.95));
	}
</style>
