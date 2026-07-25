<script>
	import { resolve } from '$app/paths';
	import heroVideo from '../assets/hero-video.mp4';
</script>

<section id="hero" class="relative h-[75vh] max-h-155 w-full overflow-hidden">
	<video
		id="hero-video"
		src={heroVideo}
		autoplay
		loop
		muted
		playsinline
		class="absolute inset-0 h-full w-full object-cover"
	></video>

	<div class="gradient absolute inset-0 flex items-center p-10">
		<div class="mx-auto w-full max-w-7xl">
			<div class="mt-12 space-y-4">
				<p class="font-space-mono text-xs tracking-[0.28em]">HOUMA, LOUISIANA</p>
				<h1 class="font-anton text-[132px] leading-28 text-primary">
					TATTOOS <br /> <span>& PIERCINGS</span>
				</h1>
				<p class="mt-6 max-w-md font-archivo leading-[1.6] text-[#b8b5b0]">
					Seven artist and a resident piercer in the heart of Houma. Come as a walk-in or find your
					artist and book directly.
				</p>
				<div class="mt-12 space-x-2">
					<a href={resolve('/artists')} class="btn-primary spac">BOOK AN ARTIST</a>
					<a href={resolve('/tattoos')} class="btn-secondary">TATTOO GALLERY</a>
				</div>
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
		background: linear-gradient(rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.98));
	}
</style>
