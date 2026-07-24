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

	<div class="absolute inset-0 flex items-center bg-black/60">
		<div class="space-y-4">
			<p class="font-space-mono text-xs tracking-[0.28em]">HOUMA, LOUISIANA</p>
			<h1 class="font-anton">TATTOOS <br /> <span>& PIERCINGS</span></h1>
		</div>
	</div>
</section>
