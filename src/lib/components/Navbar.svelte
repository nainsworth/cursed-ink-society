<script>
	import { resolve } from '$app/paths';
</script>

<nav class="py-4 px-10 small-border bg-background/90 backdrop-blur-sm z-50">
	<div class="flex justify-between items-center max-w-7xl mx-auto">
		<a href={resolve('/')} class="font-anton text-2xl text-primary">CURSED INK SOCIETY</a>

		<ul class="flex gap-6 font-space-mono text-xs font-semibold uppercase tracking-wider">
			<li><a href={resolve('/')}>HOME</a></li>
			<li><a href="/artists">ARTISTS</a></li>
			<li><a href="/tattoos">TATTOOS</a></li>
			<li><a href="/piercings">PIERCINGS</a></li>
			<li><a href="/aftercare">AFTERCARE</a></li>
			<li><a href="/faq">FAQ</a></li>
			<li><a href="/contact" class="btn-primary py-2 px-4 hover:text-background! text-xs! font-semibold!">CONTACT</a></li>
		</ul>
	</div>
</nav>

<style>
	
        a:hover {
            color: var(--color-primary);
            
        }
        
    
</style>
