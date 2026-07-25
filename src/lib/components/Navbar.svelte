<script>
	import { resolve } from '$app/paths';
</script>

<nav class="small-border z-50 bg-background/90 px-10 py-4 backdrop-blur-sm">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<a href={resolve('/')} class="font-anton text-2xl text-primary">CURSED INK SOCIETY</a>

		<ul class="flex gap-6 font-space-mono text-xs font-semibold tracking-wider uppercase">
			<li><a href={resolve('/')}>HOME</a></li>
			<li><a href={resolve('/artists')}>ARTISTS</a></li>
			<li><a href={resolve('/tattoos')}>TATTOOS</a></li>
			<li><a href={resolve('/piercings')}>PIERCINGS</a></li>
			<li><a href={resolve('/aftercare')}>AFTERCARE</a></li>
			<li><a href={resolve('/faq')}>FAQ</a></li>
			<li>
				<a
					href={resolve('/contact')}
					class="btn-primary px-4 py-2 text-xs! font-semibold! hover:text-background!">CONTACT</a
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
