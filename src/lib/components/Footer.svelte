<script>
	import { resolve } from '$app/paths';
	// import SocialMedia from './SocialMedia.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="small-border px-10">
		<div class="mx-auto flex max-w-7xl flex-col justify-between gap-8 py-12 md:flex-row md:gap-4">
			<div class="flex-1 space-y-2">
				<p class="font-anton text-3xl text-primary uppercase">Cursed Ink Society</p>
				<div class="font-space-mono text-sm leading-6">
					<p>Tattoos & Piercings</p>
					<p>488 Corporate Dr, Suite 11</p>
					<p>Houma, La 70360</p>
					<a href="tel:9852082334">(985) 208-2334</a>
				</div>
				<!-- <SocialMedia /> -->
			</div>

			<div class="flex flex-1 justify-between gap-7">
				<div class="font-space-mono text-sm">
					<p class="mb-3 font-bold text-primary uppercase">Hours</p>
					<div class="space-y-2">
						<p>Mon-Thu: 1-9pm</p>
						<p>Fri-Sat: 1-10pm</p>
						<p>Sun: Closed</p>
					</div>
				</div>

				<div class="block font-space-mono text-sm">
					<p class="mb-3 font-bold text-primary uppercase">Explore</p>
					<div class="flex flex-col gap-2">
						<a href={resolve('/#artists')}>Artists</a>
						<a href={resolve('/tattoos')}>Tattoos</a>
						<a href={resolve('/piercings')}>Piercings</a>
						<a href={resolve('/aftercare')}>Aftercare</a>
						<a href={resolve('/faq')}>FAQ</a>
						<a href={resolve('/#contact')}>Contact</a>
					</div>
				</div>

				<div class="font-space-mono text-sm">
					<p class="mb-3 font-bold text-primary uppercase">Follow</p>
					<div class="flex flex-col gap-2">
						<a href="https://www.instagram.com/cursedinksociety" target="_blank">Instagram</a>
						<a href="https://www.facebook.com/Cursed-Ink-Society-61578184810084/" target="_blank"
							>Facebook</a
						>
						<a href="https://www.tiktok.com/@cursedinksociety" target="_blank">TikTok</a>
						<a href="mailto:cursedinksociety@gmail.com" target="_blank">Email</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="px-10 py-5">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 font-space-mono text-[10px] font-light uppercase md:flex-row"
		>
			<p>© {currentYear} Cursed Ink Society · Houma, LA</p>
			<p>Must be 18+ for tattoos & piercings · Valid ID Required</p>
		</div>
	</div>
</footer>

<style>
	a:hover {
		color: var(--color-primary);
	}
</style>
