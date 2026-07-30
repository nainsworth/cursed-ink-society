<script>
	import { resolve } from '$app/paths';
	import { artists } from '$lib/data/artists';

	const piercer = artists.find((artist) => artist.role === 'Piercer');
</script>

<section class="small-border section">
	<div class="mx-auto max-w-4xl">
		<div class="grid grid-flow-auto items-center gap-4 md:gap-6">
			<h2 class="col-span-1 col-start-1 row-start-1">
				Body <br /> Piercings
			</h2>

			<div class="col-start-1 row-start-2 self-start ">
				<p class="mb-10 leading-7 text-tertiary ">
					Body piercings by our resident piercer. Transparent pricing, implant-grade jewelry, and a
					sterile studio — walk-ins welcome during open hours.
				</p>
				<a href={resolve('/piercings')} class="btn-primary">See Pricing & Gallery</a>
			</div>

			{#if piercer}
				<a
					href={piercer.instagram}
					class="text-center font-space-mono uppercase transition-transform duration-100 hover:scale-110 col-start-2 row-span-2 row-start-1"
				>
					<img
						src={piercer.image}
						alt={piercer.name}
						class="mx-auto h-86 w-auto object-cover hover:drop-shadow-lg hover:drop-shadow-primary/50 md:h-118"
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
