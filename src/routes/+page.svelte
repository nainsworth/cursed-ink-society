<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';

	import { artists } from '$lib/data/artists';
	import { resolve } from '$app/paths';

	const piercer = artists.find((artist) => artist.role === 'Piercer');
</script>

<Hero />
<Marquee />

<section id="artists" class="small-border px-8 py-14 md:px-10 md:py-20">
	<div class="mx-auto max-w-7xl space-y-8">
		<h2 class="leading-24">The Artists</h2>
		<p class="max-w-130 leading-7 text-tertiary">
			Each artists books independently and have their unique styles. Select an artist to reach out
			directly.
		</p>
		<div class="grid grid-cols-3 gap-6 md:flex">
			{#each artists.filter((a) => a.role === 'Artist' || a.role === 'Apprentice') as artist (artist.slug)}
				<a
					href={resolve('/')}
					class="text-center font-space-mono uppercase transition-transform duration-100 hover:scale-110"
				>
					<img
						src={artist.image}
						alt={artist.name}
						class=" h-96 w-full object-cover hover:drop-shadow-lg hover:drop-shadow-primary/50 md:h-128"
					/>
					<div class="mt-4">
						<p class="font-bold text-primary">{artist.name}</p>
						<p class="text-sm">{artist.role}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="small-border px-8 py-14 md:px-10 md:py-20">
	<div class="mx-auto max-w-4xl">
		<div class="grid grid-cols-2 items-center gap-8">
			<h2 class="col-span-2 mb-4! leading-24 md:col-span-1 md:col-start-1 md:row-start-1">
				Body <br /> Piercings
			</h2>

			<div class="md:col-start-1 md:row-start-2">
				<p class="mb-10 leading-7 text-tertiary">
					Body piercings by our resident piercer. Transparent pricing, implant-grade jewelry, and a
					sterile studio — walk-ins welcome during open hours.
				</p>
				<a href={resolve('/piercings')} class="btn-primary ">See Pricing & Gallery</a>
			</div>

			{#if piercer}
				<a
					href={resolve('/')}
					class="text-center font-space-mono uppercase transition-transform duration-100 hover:scale-110 md:col-start-2 md:row-span-2 md:row-start-1"
				>
					<img
						src={piercer.image}
						alt={piercer.name}
						class="h-96 mx-auto w-auto object-cover hover:drop-shadow-lg hover:drop-shadow-primary/50 md:h-118"
					/>
					<div class="mt-4">
						<p class="font-bold text-primary">{piercer.name}</p>
						<p class="text-sm">{piercer.role}</p>
					</div>
				</a>
			{/if}
		</div>
	</div>
</section>

<section id="contact" class="px-8 py-14 md:px-10 md:py-20">
	<div class="mx-auto max-w-7xl">
		<div class="flex flex-col justify-between gap-14 md:flex-row">
			<div class="flex-1">
				<h2 class="mb-4! leading-24">Get in Touch</h2>
				<p class="mb-8 leading-7 text-tertiary">
					General questions, collabs, guest spots, or book a tattoo? Message the shop below and
					we'll get back to you. If you know what artist you want, book with them directly.
				</p>
				<form action="" class="flex flex-col gap-3.5">
					<div class="flex gap-3.5">
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
					</div>
					<input type="text" placeholder="Subject" />
					<textarea class="h-30" placeholder="Message"></textarea>
					<button type="submit" class="btn-primary">Send Message</button>
				</form>
			</div>
			<div class="flex-1">
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.898653055887!2d-90.75552162381943!3d29.606632275147042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86211b6acd452111%3A0x1b0d724b4fc8af51!2sCursed%20Ink%20Society!5e0!3m2!1sen!2sus!4v1785042588874!5m2!1sen!2sus"
					width="600"
					height="450"
					style="width: 100%; height: 100%; min-height: 260px; border: 0px; filter: invert(0.92);"
					loading="lazy"
					referrerpolicy="strict-origin-when-cross-origin"
				></iframe>
			</div>
		</div>
	</div>
</section>

<style>
	input,
	textarea {
		background: #101010;
		border: 1px solid #262626;
		width: 100%;
		padding: 14px;
		color: var(--color-primary);
	}
</style>
