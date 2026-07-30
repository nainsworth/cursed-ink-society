<script>
	import { resolve } from '$app/paths';
	import { Hamburger } from 'svelte-hamburgers';
</script>

<nav class="small-border z-50 bg-background/90 px-6 py-4 backdrop-blur-sm md:px-10">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<a href={resolve('/')} class="font-anton text-3xl text-primary whitespace-nowrap">CURSED INK SOCIETY</a>

		<div class="md:hidden">
			<Hamburger type="squeeze" --color="var(--color-primary)" --padding="0" />
		</div>

		<ul
			class="hidden items-center gap-6 font-space-mono text-xs font-semibold tracking-wider uppercase md:flex"
		>
			<li><a href={resolve('/#artists')}>Artists</a></li>
			<li><a href={resolve('/tattoos')}>Tattoos</a></li>
			<li><a href={resolve('/piercings')}>Piercings</a></li>
			<li><a href={resolve('/aftercare')}>Aftercare</a></li>
			<li><a href={resolve('/faq')}>FAQ</a></li>
			<li>
				<a
					href={resolve('/#contact')}
					class="btn-primary px-4 py-2 text-xs! font-semibold! hover:text-background!">Contact</a
				>
			</li>
		</ul>
	</div>
</nav>

<style>
	a:hover {
		color: var(--color-primary);
	}
</style>
