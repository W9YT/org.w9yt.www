<script lang="ts">
	import './layout.css';
	import './fonts.css';

	let { children } = $props();
	import { page } from '$app/state';

	import { CircleUserIcon } from '@lucide/svelte';
	import { Menu as SvelteMenu } from '@lucide/svelte';
	import { AppBar, Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	import menuGlobal from '$lib/menus/global-center.json';
	import menuUser from '$lib/menus/global-user.json';
	import menuSidebar from '$lib/menus/global-sidebar.json';
	import { goto } from '$app/navigation';
	import SiteProvider from '$lib/composite/+site-provider.svelte';

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
</script>

<svelte:head>
	<link rel="canonical" href="https://www.w9yt.org{page.url.pathname}">
</svelte:head>

<noscript>
	<div class="min-w-screen bg-red-400 p-5 font-mono font-semibold sticky top-0">
		This site requires JavaScript to function. Please enable JavaScript.	
	</div>
</noscript>

<AppBar class="sticky top-0 z-5">
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">

		<AppBar.Lead>
			<a href="/">
				<p class="text-2xl font-(family-name:--font-display) font-semibold tracking-widest px-2">W9YT</p>
				<p class="text-xs font-(family-name:--font-display) font-medium px-2">Badger Amateur Radio Society</p>
			</a>
		</AppBar.Lead>
		<AppBar.Headline class="flex justify-center">
			<nav class="btn-group preset-outlined-primary-300-700 flex-col p-2 md:flex-row hidden md:block">
				{#each menuGlobal as item}
					<button type="button" class="btn capitalize hover:preset-filled" onclick={e => goto(item.link)}>
						{item.text}
					</button>
				{/each}
			</nav>
		</AppBar.Headline>
		<AppBar.Trail>
			<Menu onSelect={globalMenuOnSelect}>
				<Menu.Trigger class="btn" aria-label="Member Tools Menu"><CircleUserIcon class="size-5" aria-label="Icon of Generic User" /></Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content class="z-10">
							<Menu.ItemGroup>
								<Menu.ItemGroupLabel>Member Tools</Menu.ItemGroupLabel>
								{#each menuUser as item}
									<Menu.Item value={item.link}>
										<Menu.ItemText data-nosnippet> <!-- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag -->
											{item.text}
										</Menu.ItemText>
									</Menu.Item>
								{/each}
							</Menu.ItemGroup>
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu>

			<Menu onSelect={globalMenuOnSelect}>
				<Menu.Trigger class="btn md:mr-3" aria-label="Open Menu"><SvelteMenu class="size-6" aria-label="Icon of Generic Three Line Menu" /></Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content class="z-10">
							{#each menuSidebar as group, i}
								<Menu.ItemGroup>
									<Menu.ItemGroupLabel>{group.label}</Menu.ItemGroupLabel>

									{#each group.items as item}
										<Menu.Item value={item.link}>
											<Menu.ItemText>
												{item.text}
											</Menu.ItemText>
										</Menu.Item>
									{/each}
								</Menu.ItemGroup>
								{#if menuSidebar.length - i > 1}
									<Menu.Separator />
								{/if}
								{/each}
						</Menu.Content>

					</Menu.Positioner>
				</Portal>
			</Menu>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

<section class="min-h-screen">
	{@render children()}
</section>


<footer class="p-5 text-sm font-light max-w-500 mx-auto dark:text-gray-400">
	<hr class="py-3 mt-35 md:mt-1">
	<section class="max-w-7xl mx-auto">
		
		<p class="font-normal pb-2">
			Copyright &copy; {currentYear} Badger Amateur Radio Society and contributors. All rights reserved.
		</p>
		<p class="pb-2">
			The Badger Amateur Radio Society (BARS) is a Wisconsin based 501(c)(3) non-profit. Bucky Badger and related marks are trademarks of the University of Wisconsin-Madison and are used under license. 
			The Registered Student Organization (RSO) Badger Amateur Radio Society at the University of Wisconsin-Madison is governed by UW Policy UW-2002 and the Office of Student Conduct and Community Standards.
		</p>
		<p class="pb-2">
			The Badger Amateur Radio Society logo, icon, and branding is Copyright &copy; {currentYear} Badger Amateur Radio Society and may not be included in derived works.
		</p>
		<div class="flex space-x-2">
			<SiteProvider uppercase={true}/> &emsp13;
			<a class="underline" href="/privacy-policy/">Privacy Policy</a>
		</div>


	</section>

</footer>