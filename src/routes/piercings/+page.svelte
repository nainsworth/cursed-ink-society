<script>
	import { piercingProducts } from '#lib/data/piercingPrices.js';
</script>

<section class=" pb-0">
	<div class="mx-auto max-w-7xl space-y-4">
		<h1 class="font-anton text-7xl text-primary md:text-[132px]">PIERCINGS</h1>
		<p class="mb-2 leading-7 text-tertiary">
			Sterile, single-use setups and implant-grade jewelry. Walk-ins welcome during open hours.
		</p>
	</div>
</section>
<section id="piercing-pricing" class="section">
	<div class="mx-auto max-w-7xl space-y-8">
		<h2 class="small-border pb-6 text-5xl md:pb-2">PRICING MENU</h2>
		<div
			class="grid grid-cols-[repeat(auto-fit,minmax(max(18rem,(100%-5rem)/3),1fr))] items-start gap-10"
		>
			{#each piercingProducts as category (category.type)}
				<div class="mx-auto w-full space-y-2 md:max-w-sm">
					<h3>{category.type}</h3>
					<div class="font-space-mono text-tertiary">
						{#each category.products as item (item.product)}
							<div class="py-1.5">
								<div class="flex items-center gap-3">
									<p>{item.product}</p>
									<span class="flex-1 border-b border-dotted border-secondary"></span>
									<p>{item.price}</p>
								</div>
								<p class="text-[10px] italic">{item.note}</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<p class="max-w-xl text-sm italic">
			Prices include a basic titanium end. All clients must be
			12+ with valid ID or Birth Certificate; genital and nipple piercings are 18+.
		</p>
	</div>
</section>
<section id="piercing-gallery" class="section small-border space-y-10 pt-0">
	<div class="mx-auto max-w-7xl space-y-8">
		<div class="small-border flex items-end justify-between pb-6 md:pb-2">
			<h2 class="text-5xl">GALLERY</h2>
			<!-- <p>May contain 18+ content</p> -->
		</div>
		<div class="flex flex-col gap-10">
			<h3 class="text-secondary text-center">COMING SOON!</h3>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
		<a href="https://ig.me/m/harley.rose25" target="_blank" class="btn-primary"
			>Message our piercer</a
		>
		<a href="https://www.instagram.com/cursedinksociety" target="_blank" class="btn-secondary"
			>See More Work</a
		>
	</div>
</section>
