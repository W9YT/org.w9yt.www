<script lang="ts">
	import './layout.css';
	import './fonts.css';

	let { children } = $props();
	import { page } from '$app/state';
	import ModeSwitch from '$lib/composite/ModeSwitch/+page.svelte';

	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import GlobalMenu from '$lib/composite/GlobalMenu/+page.svelte'

	import menuGlobal from '$lib/menus/global-center.json';
	import { goto } from '$app/navigation';
	import SiteProvider from '$lib/composite/+site-provider.svelte';
	import Search from '$lib/composite/search/+page.svelte'

	const currentYear = new Date().getFullYear();

	function globalMenuOnSelect(details: any) {
		console.log(details);
		if (details.value .includes("://")) {
			window.location.href = details.value;
		} else if (details.value.includes("mailto:")) {
			window.location.href = details.value;
		} else {
			goto(details.value);
		}
	}

	let isSearchBarActive = $state(false);
	let isGlobalMenuActive = $state(false);
	let headlineClass = $state("");
	let logoClass = $state("");
	$effect(() => {
		if (isSearchBarActive) {
			headlineClass = "invisible";
			logoClass = "invisible md:visible"
		} else {
			headlineClass = "";
			logoClass = "";
		}
	});
</script>

<svelte:head>
	<link rel="canonical" href="https://www.w9yt.org{page.url.pathname}">
</svelte:head>

<noscript>
	<div class="min-w-screen bg-red-400 p-5 font-mono font-semibold sticky top-0">
		This site requires JavaScript to function. Please enable JavaScript.	
	</div>
</noscript>

<AppBar class="sticky top-0 z-5" aria-hidden={isGlobalMenuActive ? "true" : undefined}>
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">

		<AppBar.Lead>
			<a href="/" class="{logoClass}">
				<p class="text-2xl font-(family-name:--font-display) font-semibold tracking-widest px-2">W9YT</p>
				<p class="text-xs font-(family-name:--font-display) font-medium px-2">Badger Amateur Radio Society</p>
			</a>
		</AppBar.Lead>
		<AppBar.Headline class="flex justify-center">
			<nav class="btn-group preset-outlined-primary-300-700 flex-col p-2  hidden lg:block {headlineClass}">
				{#each menuGlobal as item}
					{#if item.link.startsWith("http")}
						<button type="button" class="btn capitalize hover:preset-filled" onclick={e => window.location.href=item.link}>
							{item.text}
						</button>
					{:else}
						<button type="button" class="btn capitalize hover:preset-filled" onclick={e => goto(item.link)}>
							{item.text}
						</button>
					{/if}
				{/each}
			</nav>
		</AppBar.Headline>
		<AppBar.Trail>
			<Search bind:isActive={isSearchBarActive} fullScreen="true" aria-label="Search W9YT" buttonIconClass="hidden sm:block" />
			<ModeSwitch></ModeSwitch>

			<GlobalMenu bind:isOpen={isGlobalMenuActive}></GlobalMenu>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

<section class="min-h-screen" aria-hidden={isGlobalMenuActive ? "true" : undefined}>
	{@render children()}
</section>


<footer class="p-5 text-sm font-light max-w-500 mx-auto dark:text-gray-400" data-nosnippet>
	<hr class="py-3 mt-35 md:mt-1">
	<section class="max-w-7xl mx-auto">
		
		<p class="font-normal pb-2" data-nosnippet>
			Copyright &copy; {currentYear} Badger Amateur Radio Society and contributors. All rights reserved.
		</p>
		<p class="pb-2" data-nosnippet>
			The Badger Amateur Radio Society (BARS) is a Wisconsin based 501(c)(3) non-profit. Bucky Badger and related marks are trademarks of the University of Wisconsin-Madison and are used under license. 
			The Registered Student Organization (RSO) Badger Amateur Radio Society at the University of Wisconsin-Madison is governed by UW Policy UW-2002 and the Office of Student Conduct and Community Standards.
		</p>
		<p class="pb-2" data-nosnippet>
			The Badger Amateur Radio Society logo, icon, and branding is Copyright &copy; {currentYear} Badger Amateur Radio Society and may not be included in derived works.
		</p>
		<div class="flex space-x-2" data-nosnippet>
			<SiteProvider uppercase={true}/> &emsp13;
			<a class="underline" href="/privacy-policy/">Privacy Policy</a>
		</div>


	</section>

</footer>