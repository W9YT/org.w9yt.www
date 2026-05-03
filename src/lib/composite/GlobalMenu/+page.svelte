<script lang="ts">
	import { goto } from '$app/navigation';
	import menuSidebar from '$lib/menus/global-sidebar.json';
	import { Menu as SvelteMenu, X, ArrowLeft, SearchIcon } from '@lucide/svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import Search from '$lib/composite/search/+page.svelte'


	let {isOpen = $bindable(false)} = $props();
	
	onMount(() => {
        const handler = (e: { key: string; }) => {
            if (e.key === 'Escape') menuClose();
            if (e.key === 'm') isOpen = true;
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    });
	let column2 = $state("");
	let column2done = $state(true);

	let col2class = $derived(column2 ? "md:border-r border-neutral-300 dark:border-neutral-700" : "");

	const menuNavigate = (path: string) => {
		if (path.startsWith("http")) {
			window.location.href = path;
		} else {
			goto(path);
		}
		menuClose();
		column2 = "";
	};
	const menuClose = () => {
		isOpen = false;
		column2 = "";
	}
</script>

<svelte:head></svelte:head>

<!-- Toggle Button -->
<button
	class="rounded-md p-2 transition-colors hover:bg-surface-200-800"
	onclick={() => (isOpen = true)}
	aria-label="Open menu"
>
	<SvelteMenu class="size-6" role="none" />
</button>

<!-- Fullscreen Menu Overlay -->
{#if isOpen}
	<div data-nosnippet class="fixed inset-0 z-50 flex flex-col bg-white dark:bg-black" transition:slide={{ axis: 'y', duration: 300 }}>
		<AppBar class="sticky top-0 z-5">
			<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
				<AppBar.Lead>
					<a href="." class="" onclick={() => menuClose()}>
						<p
							class="px-2 font-(family-name:--font-display) text-2xl font-semibold tracking-widest"
						>
							W9YT
						</p>
						<p class="px-2 font-(family-name:--font-display) text-xs font-medium">
							Badger Amateur Radio Society
						</p>
					</a>
				</AppBar.Lead>

				<AppBar.Trail>
					<!-- Close Button -->
					<button
						class="absolute top-4 right-4 rounded-md p-2 transition-colors hover:bg-surface-200-800"
						onclick={() => menuClose()}
						aria-label="Close menu"
					>
						<X class="size-7" role="none" />
					</button>
				</AppBar.Trail>
			</AppBar.Toolbar>
		</AppBar>

		<!-- Menu Content -->
		<nav class="flex h-[calc(100vh-80px)] space-y-8 text-2xl md:text-3xl font-semibold" >
			<div data-nosnippet class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full  max-w-[1140px]">

				<!-- COL 1 -->
				<div class="md:border-r border-neutral-300 dark:border-neutral-700 md:px-4 md:pt-5 overflow-y-scroll scrollbarHide max-h-full {column2 || !column2done ? 'hidden md:block' : ''}" transition:slide={{ axis: 'x', duration: 900 }} onoutroend={() => column2done = true}>

					{#each menuSidebar as group, i}
						{#if (group.label)}
							<div class="border-b md:border-b-0 border-neutral-300 dark:border-neutral-700 w-full pr-2">
								<button class="w-full p-3 px-7 m-1 hover:bg-(--theme-red-100)/50 rounded-2xl text-left whitespace-nowrap overflow-hidden" onclick={() => (column2 = group.label)}>
									{group.label}
								</button>
							</div>
						{/if}
					{/each}
					<div class="border-b md:border-b-0 border-neutral-300 dark:border-neutral-700 w-full pr-2">
						<div class="w-full p-3 px-7 m-1 hover:bg-(--theme-red-100)/50 rounded-2xl text-left whitespace-nowrap overflow-hidden">
							<Search fullScreen="true" aria-label="Search W9YT" buttonIconClass="p-0 w-full">
								<div class="text-2xl md:text-3xl font-semibold flex gap-3 w-full">
									<span transition:fade={{ duration: 200 }} class="my-auto">
										<SearchIcon class="size-6 my-auto" aria-hidden="true" />
									</span>
									Search Wiki
								</div>
							</Search> 
						</div>
					</div>

					
				</div>

				<!-- COL 2 -->
				{#if column2 != ""}
					<div class="{col2class} md:px-4 col-span-2 md:pt-5 overflow-y-scroll scrollbarHide max-h-full" transition:slide={{ axis: 'x', duration: 800 }} onoutroend={() => column2done = true}>

						<p class="mt-1 py-3 pl-3 md:block hidden whitespace-nowrap overflow-hidden">{column2}</p>
						<button class="border border-neutral-300 dark:border-neutral-700 py-3 pl-5 mb-4 md:hidden flex items-center gap-3 w-full whitespace-nowrap overflow-hidden" onclick={() => (column2done = false, column2 = "")}>
							<div class="h-full border-r border-neutral-400 dark:border-neutral-600 pr-3 flex items-center">
								<ArrowLeft class="size-5" />
							</div>
							{column2}
						</button>
						{#each menuSidebar as group, i}
							{#if group.label === column2}
								{#each group.items as item}
									<button class="w-full p-3 px-7 m-1 hover:bg-(--theme-red-100)/50 rounded-2xl text-left text-lg md:text-2xl font-normal whitespace-nowrap overflow-hidden" onclick={() => (menuNavigate(item.link))}>
										{item.text}
									</button>
								{/each}
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		</nav>
	</div>
{/if}
