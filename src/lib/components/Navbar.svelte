<script>
	import { resolve } from '$app/paths';
</script>

<nav class="py-4 px-10">
	<div class="flex justify-between items-center">
		<a href={resolve('/')} class="font-anton text-2xl text-primary">CURSED INK SOCIETY</a>

		<ul class="flex gap-4 font-space-mono text-sm">
			<li><a href={resolve('/')}>HOME</a></li>
			<li><a href="/artists">ARTISTS</a></li>
			<li><a href="/tattoos">TATTOOS</a></li>
			<li><a href="/piercings">PIERCINGS</a></li>
			<li><a href="/aftercare">AFTERCARE</a></li>
			<li><a href="/faq">FAQ</a></li>
			<li><a href="/contact" class="btn-primary py-1 px-3 hover:text-background!">CONTACT</a></li>
		</ul>
	</div>
</nav>

<style>
	
        a:hover {
            color: var(--color-primary);
            
        }
        
    
</style>
