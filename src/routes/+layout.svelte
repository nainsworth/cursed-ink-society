<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/fav-eye-con.svg';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { page } from '$app/state';

	const siteName = 'Cursed Ink Society';

	const titles: Record<string, string> = {
		'/': `${siteName} Tattoos & Piercings in Houma, LA`,
		'/tattoos': `Tattoos | ${siteName}`,
		'/piercings': `Piercings | ${siteName}`,
		'/aftercare': `Aftercare | ${siteName}`,
		'/faq': `FAQ | ${siteName}`,
		'/coming-soon': `Coming Soon | ${siteName}`
	};

	let title = $derived(titles[page.route.id ?? ''] ?? siteName);

	let { children } = $props();
</script>

<svelte:head>
	<meta name="description" content="Tattoos and piercings in Houma, LA." />
	<meta property="og:title" content="Cursed Ink Society" />
	<meta property="og:description" content="Tattoos and piercings in Houma, LA." />
	<meta property="og:image" content="https://www.cursedinksociety.com/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<title>{title}</title>
	<link rel="icon" href={favicon} />
</svelte:head>
{#if page.url.pathname !== '/coming-soon'}
	<Navbar />
{/if}
<main>
	{@render children()}
</main>
<Footer />
