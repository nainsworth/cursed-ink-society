<script>
	import Marquee from '../../lib/components/Marquee.svelte';
	import eyeCon from '#lib/assets/images/eye-con.svg';

	const reviewURL = 'https://share.google/c4s0GQp4htcRkoK1I';
	const facebookURL = 'https://www.facebook.com/Cursed-Ink-Society-61578184810084/';
</script>

<section id="coming-soon" class="relative w-full overflow-hidden px-4">
	<div class="gradient items-center p-2 py-8 sm:p-8">
		<div class="relative mx-auto flex max-w-7xl items-center gap-8">
			<div class="relative z-10 space-y-4 sm:mt-12">
				<p class="font-space-mono text-xs tracking-[0.28em]">
					CURSED INK SOCIETY TATTOO & PIERCINGS
				</p>
				<h1 class="font-anton text-8xl leading-21 text-primary sm:text-[148px] sm:leading-32">
					COMING <br /> <span class="">SOON</span>
				</h1>
				<p class="mt-6 max-w-md font-archivo leading-[1.6] text-tertiary">
					In the meantime, the shop is open. Follow us on social media or reach out to book.
				</p>
				<div class="space mt-12 space-y-2 space-x-2">
					<a href={facebookURL} target="_blank" class="btn-primary">FOLLOW US ON FACEBOOK →</a>
					<a href={reviewURL} target="_blank" class="btn-secondary">REVIEW US ON GOOGLE</a>
				</div>
			</div>
			<img
				src={eyeCon}
				alt=""
				class="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-3"
			/>
		</div>
	</div>
</section>

<Marquee />

<style>
	span {
		color: transparent;
		-webkit-text-stroke: 0.045em var(--color-primary);
	}

	.gradient {
		background: linear-gradient(rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.98));
	}
</style>
