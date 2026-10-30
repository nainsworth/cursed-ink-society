<script>
	import Marquee from '../../lib/components/Marquee.svelte';

	const reviewURL = 'https://share.google/c4s0GQp4htcRkoK1I';
	const facebookURL = 'https://www.facebook.com/Cursed-Ink-Society-61578184810084/';
</script>

<section id="coming-soon" class="relative w-full overflow-hidden">
	<div class="gradient items-center p-8 md:p-10">
		<div class="mx-auto max-w-7xl">
			<div class="mt-12 space-y-4">
				<p class="font-space-mono text-xs tracking-[0.28em]">
					CURSED INK SOCIETY TATTOO & PIERCINGS
				</p>
				<h1 class="font-anton text-7xl text-primary md:text-[132px] md:leading-28">
					COMING <br /> <span class="">SOON</span>
				</h1>
				<p class="mt-6 max-w-md font-archivo leading-[1.6] text-tertiary">
					In the meantime, the shop is open. Follow us on social media or reach out to book.
				</p>
				<div class="mt-12 space-x-2">
					<a href={facebookURL} target="_blank" class="btn-primary">FOLLOW US ON FACEBOOK →</a>
					<a href={reviewURL} target="_blank" class="btn-secondary">REVIEW US ON GOOGLE</a>
				</div>
			</div>
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
