<script>
	import { resolve } from '$app/paths';
	import { Hamburger } from 'svelte-hamburgers';
	import { slide } from 'svelte/transition';

	let open = $state(false);

	const navItems = [
		{
			label: 'Artists',
			href: resolve('/#artists')
		},
		{
			label: 'Tattoos',
			href: resolve('/tattoos')
		},
		{
			label: 'Piercings',
			href: resolve('/piercings')
		},
		{
			label: 'Aftercare',
			href: resolve('/aftercare')
		},
		{
			label: 'FAQ',
			href: resolve('/faq')
		}
	];
</script>

<nav class="small-border relative z-50 bg-background/90 px-6 py-4 backdrop-blur-sm md:px-10">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<a href={resolve('/')} class="font-anton text-3xl whitespace-nowrap text-primary"
			>CURSED INK SOCIETY</a
		>

		<div class="md:hidden">
			<Hamburger bind:open type="squeeze" --color="var(--color-primary)" --padding="0" />
		</div>

		<ul
			class="hidden items-center gap-6 font-space-mono text-xs font-semibold tracking-wider uppercase md:flex"
		>
			{#each navItems as item (item.label)}
				<li><a href={item.href}>{item.label}</a></li>
			{/each}

			<li>
				<a
					href={resolve('/#contact')}
					class="btn-primary px-4 py-2 text-xs! font-semibold! hover:text-background!">Contact</a
				>
			</li>
		</ul>
	</div>

	{#if open}
		<ul
			transition:slide={{ duration: 200 }}
			class="absolute inset-x-0 top-full flex flex-col gap-6 border-b border-neutral-800 bg-background px-6 py-6 font-space-mono text-sm font-semibold tracking-wider uppercase md:hidden"
		>
			{#each navItems as item (item.label)}
				<li><a href={item.href} onclick={() => (open = false)}>{item.label}</a></li>
			{/each}
			<li>
				<a
					href={resolve('/#contact')}
					class="btn-primary inline-block px-4 py-2 text-xs! font-semibold!"
					onclick={() => (open = false)}
				>
					Contact
				</a>
			</li>
		</ul>
	{/if}
</nav>

<style>
	a:hover {
		color: var(--color-primary);
	}
</style>
