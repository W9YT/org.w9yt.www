<script lang="ts">
	import './layout.css';
	import './fonts.css';

	let { children } = $props();
	import { page } from '$app/state';
	import {
		initAuth,
		initialized,
		authenticated,
		user,
		login,
		logout,
		authError,
		reCheckAuth,
		registerAccount
	} from '$lib/auth/auth';
	import menuLoginData from '$lib/menus/login-target.json';

	function initials(name?: string) {
		if (!name) return '';

		return name
			.split(' ')
			.map((part) => part[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	}

	import ModeSwitch from '$lib/composite/ModeSwitch/+page.svelte';
	import GlobalAlert from '$lib/composite/GlobalAlert/+page.svelte';

	import { AppBar, Popover, Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import GlobalMenu from '$lib/composite/GlobalMenu/+page.svelte'

	import menuGlobal from '$lib/menus/global-center.json';
	import { goto } from '$app/navigation';
	import SiteProvider from '$lib/composite/+site-provider.svelte';
	import Search from '$lib/composite/search/+page.svelte'

	import { FolderGit2, GitPullRequestCreate, User, ShieldQuestionMark, XIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const currentYear = new Date().getFullYear();


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

	onMount(() => {
		initAuth();

			let checking = false;
			const interval = setInterval(async () => {
				if (checking) return;

				checking = true;

				try {
					await reCheckAuth();
				} finally {
					checking = false;
				}
			}, 30_000);

			return () => clearInterval(interval);
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

			{#if !$initialized}
				<div class="placeholder size-8 animate-pulse [animation-duration:1s] hidden sm:block w-22 justify-center"></div>
			{:else if $authError}
				<div class="rounded-md p-2 px-3 transition-colors hover:bg-surface-200-800 hidden sm:block">


					<Popover>
						<Popover.Trigger aria-label="Authentication status unknown"><ShieldQuestionMark class="inline size-5" role="none" /></Popover.Trigger>
						<Portal>
							<Popover.Positioner class="z-20!">
								<Popover.Content class="card w-96 p-4 bg-surface-100-900 shadow-xl" aria-label="Authentication status error details">
									<div class="space-y-4">
										<header class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
											<div>
												<b>Auth Status Unknown</b>
											</div>
											<div>

											</div>
											<Popover.CloseTrigger class="btn-icon hover:preset-tonal self-start" aria-label="Close">
												<XIcon class="size-4" role="none" />
											</Popover.CloseTrigger>
										</header>
										<Popover.Description>
											<p>
												There was an error fetching your authentication status.
											</p>
											<br>
											<p>
												To log out, visit <button class="underline" onclick={() => window.open('/.well-known/manage-account-no-robot.html', '_blank')}>manage account</button>,
												select your name from the top right, then click 'Sign out'.
											</p>
										</Popover.Description>
									</div>
									<Popover.Arrow class="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
										<Popover.ArrowTip />
									</Popover.Arrow>
								</Popover.Content>
							</Popover.Positioner>
						</Portal>
					</Popover>
				</div>
			{:else if $authenticated}
				<Menu>
					<Menu.Trigger class="rounded-md p-2 transition-colors hover:bg-surface-200-800 hidden sm:block">
						<User class="inline" role="none" /> 
						<span class="hidden sm:inline xl:hidden">{initials($user?.name) ?? $user?.username} </span>
						<span class="hidden xl:inline">{$user?.name ?? $user?.username} </span>
					</Menu.Trigger>
					<Portal>
						<Menu.Positioner class="pt-3">
							<Menu.Content>
								{#each menuLoginData as item}
									<a href={item.link}>
										<Menu.Item value={item.label}>
											<Menu.ItemText>Open {item.label}</Menu.ItemText>
										</Menu.Item>
									</a>
								{/each}
								<Menu.Separator />
								<Menu.Item value="manage" onclick={() => window.open('/.well-known/manage-account-no-robot.html')}>
									<Menu.ItemText>Manage profile</Menu.ItemText>
								</Menu.Item>
								<Menu.Separator />
								<Menu.Item value="logout" onclick={logout}>
									<Menu.ItemText>Log Out</Menu.ItemText>
								</Menu.Item>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu>

			{:else}
				<Menu>
					<Menu.Trigger class="rounded-md p-2 transition-colors hover:bg-surface-200-800 hidden sm:block">
						<User class="inline" role="none" /> 
						Log in
					</Menu.Trigger>
					<Portal>
						<Menu.Positioner class="pt-3">
							<Menu.Content>
								{#each menuLoginData as item}
									<a href={item.link}>
										<Menu.Item value={item.label}>
											<Menu.ItemText>Log in to {item.label}</Menu.ItemText>
										</Menu.Item>
									</a>
								{/each}
								<Menu.Separator />
								<Menu.Item value="manage" onclick={() => window.open('/.well-known/manage-account-no-robot.html')}>
									<Menu.ItemText>Manage profile</Menu.ItemText>
								</Menu.Item>
								<Menu.Separator />
								<Menu.Item value="register" onclick={registerAccount}>
									<Menu.ItemText>Create Account</Menu.ItemText>
								</Menu.Item>
								<Menu.Item value="login" onclick={login}>
									<Menu.ItemText>Log In</Menu.ItemText>
								</Menu.Item>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu>

			{/if}

			<ModeSwitch></ModeSwitch>

			<GlobalMenu bind:isOpen={isGlobalMenuActive}></GlobalMenu>
		</AppBar.Trail>
	</AppBar.Toolbar>
	<GlobalAlert/>
</AppBar>

<section class="min-h-screen" aria-hidden={isGlobalMenuActive ? "true" : undefined}>
	{@render children()}
</section>


<footer class="mt-35 md:mt-1 p-5 text-sm font-light max-w-500 mx-auto dark:text-gray-400" data-nosnippet>
	<div class="text-right text-gray-500 dark:text-gray-400 px-1">
		{#if page.url.pathname.startsWith("/news-events")}
		<a href="https://github.com/W9YT/org.w9yt.www/tree/main/src/routes{page.url.pathname}+page.svx" target="_blank" class="hover:text-black dark:hover:text-white">View Source <FolderGit2 class="inline" size={15} role="none"/></a>
		{:else}
		<a href="https://github.com/W9YT/org.w9yt.www/tree/main/src/routes{page.url.pathname}+page.svelte" target="_blank" class="hover:text-black dark:hover:text-white">View Source <FolderGit2 class="inline" size={15} role="none"/></a>
		{/if}
		 &emsp13;&emsp13;
		<a href="https://github.com/W9YT/org.w9yt.www/issues/new?body=Describe+the+problem&title=Visitor+Feedback:+{page.url.pathname}" target="_blank" class="hover:text-black dark:hover:text-white">Open Issue <GitPullRequestCreate class="inline" size={15} role="none"/></a>
	</div>
	<hr class="py-3 mt-3">

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