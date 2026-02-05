<script lang="ts">
	import './layout.css';
	import './fonts.css';

	let { children } = $props();

	import { CircleUserIcon } from '@lucide/svelte';
	import { Menu as SvelteMenu } from '@lucide/svelte';
	import { AppBar, Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	import menuGlobal from '$lib/menus/global-center.json';
	import menuUser from '$lib/menus/global-user.json';
	import menuSidebar from '$lib/menus/global-sidebar.json';

	const currentYear = new Date().getFullYear();

</script>

<svelte:head></svelte:head>

<AppBar>
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">

		<AppBar.Lead>
			<a href="/">
				<p class="text-2xl font-(family-name:--font-display) font-semibold tracking-widest px-2">W9YT</p>
				<p class="text-xs font-(family-name:--font-display) font-medium px-2">Badger Amateur Radio Society</p>
			</a>
		</AppBar.Lead>
		<AppBar.Headline class="flex justify-center">
			<nav class="btn-group preset-outlined-surface-200-800 flex-col p-2 md:flex-row hidden md:block">
				{#each menuGlobal as item}
					<button type="button" class="btn capitalize hover:preset-filled">
						<a href="{item.link}">{item.text}</a>
					</button>
				{/each}
			</nav>
		</AppBar.Headline>
		<AppBar.Trail>
			<span data-nosnippet> <!-- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag -->
			<Menu>
				<Menu.Trigger class="btn"><CircleUserIcon class="size-5" /></Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content>
							<Menu.ItemGroup>
								<Menu.ItemGroupLabel>Member Tools</Menu.ItemGroupLabel>
								{#each menuUser as item}
									<Menu.Item value={item.text}>
										<Menu.ItemText data-nosnippet> <!-- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag -->
											<a href="{item.link}">{item.text}</a>
										</Menu.ItemText>
									</Menu.Item>
								{/each}
							</Menu.ItemGroup>
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu>
			</span>

			<Menu>
				<Menu.Trigger class="btn md:mr-3"><SvelteMenu class="size-6"/></Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content>
							{#each menuSidebar as group, i}
								<Menu.ItemGroup>
									<Menu.ItemGroupLabel>{group.label}</Menu.ItemGroupLabel>

									{#each group.items as item}
										<Menu.Item value={item.text}>
											<Menu.ItemText>
												<a href={item.link}>{item.text}</a>
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
	<hr class="py-3">
	<section class="max-w-7xl mx-auto">
		
		<p class="font-normal pb-2">
			Copyright &copy; {currentYear} Badger Amateur Radio Society and contributors. All rights reserved.
		</p>
		<p class="pb-2">
			The Badger Amateur Radio Society (BARS) is a Wisconsin based 501(c)(3) non-profit. Bucky Badger and related marks are trademarks of the University of Wisconsin-Madison.  No affiliation, endorsement, sponsorship, or association with the University of Wisconsin-Madison or UW Athletics is claimed or implied.
			The Registered Student Organization (RSO) Badger Amateur Radio Society at the University of Wisconsin-Madison is governed by UW Policy UW-2002 and the Office of Student Conduct and Community Standards.
		</p>
		<p>
			<a href="https://hadleyso.com/?ref=www.w9yt.org&utm_source=www.w9yt.org" class="underline" target="_blank">Site Provider</a>
		</p>

	</section>

</footer>