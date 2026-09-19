<script lang="ts">
	import { goto } from '$app/navigation';
	import { SearchIcon, X } from '@lucide/svelte';
	import {
		Combobox,
		Portal,
		type ComboboxRootProps,
		useListCollection,
		Tooltip
	} from '@skeletonlabs/skeleton-svelte';
	import { onMount, tick } from 'svelte';
	import { slide } from 'svelte/transition';

	// Pagefind instance
	let pagefind: any = null;

	onMount(async () => {
		try {
			pagefind = await import(/* @vite-ignore */ `${origin}/pagefind/pagefind.js`);
			await pagefind.init();
		} catch (err) {
			console.error('Pagefind initialization error:', err);
		}
	});

	let {
		preOpen = false,
		isActive = $bindable(false),
		fullScreen = false,
		buttonIconClass = '',
		children
	} = $props();

	const dataPrompt = [
		{
			label: 'Type to search',
			value: 'Type to search',
			snippet: '',
			size: 0,
			wordCount: 0,
			source: 'prompt'
		}
	];

	const dataError = [
		{
			label: 'Error searching',
			value: 'Error searching',
			snippet: '',
			size: 0,
			wordCount: 0,
			source: 'error'
		}
	];

	let selected = $state(['']);

	let items = $state(dataPrompt);

	const collection = $derived(
		useListCollection({
			items: items,
			itemToString: (item) => item.label,
			itemToValue: (item) => JSON.stringify({
				value: item.value,
				source: item.source
			})
		})
	);

	const onOpenChange = () => {
		items = dataPrompt;
	};

	let debounceTimer: ReturnType<typeof setTimeout> | undefined;

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = async (event) => {
		const query = event.inputValue.trim();

		// If empty, reset to default list
		if (!query) {
			items = dataPrompt;
			comboboxOpen = false;
			return;
		}

		if (debounceTimer) clearTimeout(debounceTimer);

		debounceTimer = setTimeout(async () => {
			try {
				const url = 'https://wiki.w9yt.org/service.do/search/';

				const params = new URLSearchParams({
					action: 'query',
					list: 'search',
					srsearch: query,
					format: 'json',
					srwhat: 'text',
					origin: location.origin
				});

				/*
				 * Run MediaWiki and Pagefind searches at the same time.
				 */
				const [mediaWikiResponse, pagefindResponse] = await Promise.all([
					fetch(`${url}?${params}`),
					searchPagefind(query)
				]);

				const mediaWikiJson = await mediaWikiResponse.json();

				/*
				 * MediaWiki results
				 */
				const mediaWikiItems =
					mediaWikiJson?.query?.search?.map((result: any) => ({
						label: result.title,
						value: result.title,
						snippet: result.snippet,
						size: result.size,
						wordCount: result.wordcount,
						source: 'mediawiki'
					})) ?? [];

				/*
				 * Pagefind results
				 */
				const pagefindItems = pagefindResponse.map((result: any) => ({
					label: result.meta?.title || result.url,
					value: result.url,
					snippet: result.excerpt || '',
					size: 0,
					wordCount: 0,
					source: 'pagefind'
				}));

				/*
				 * Combine both search engines.
				 *
				 * MediaWiki results come first, followed by Pagefind.
				 */
				items = [...mediaWikiItems, ...pagefindItems];

				/*
				 * No results from either search engine.
				 */
				if (items.length === 0) {
					items = [
						{
							label: 'No results',
							value: '====NORESULT====',
							snippet: 'No results were found with that query',
							size: 0,
							wordCount: 0,
							source: 'none'
						},
						{
							label: 'Create Page: ' + query,
							value:
								'https://wiki.w9yt.org/index.php?veaction=edit&create=Create+page&title=' +
								encodeURIComponent(query),
							snippet: 'Go to the wiki and create a page with this title',
							size: 0,
							wordCount: 0,
							source: 'create'
						}
					];
				}

				comboboxOpen = true;
			} catch (err) {
				console.error('Search error:', err);
				items = dataError;
				comboboxOpen = true;
			}
		}, 300);
	};

	/*
	 * Search Pagefind and load the actual result data.
	 *
	 * Pagefind.search() returns lightweight result objects. Calling
	 * result.data() gives us url, excerpt, meta.title, etc.
	 */
	async function searchPagefind(query: string) {
		if (!pagefind) {
			return [];
		}

		try {
			const search = await pagefind.search(query);

			return await Promise.all(
				search.results.slice(0, 10).map(async (result: any) => {
					return await result.data();
				})
			);
		} catch (err) {
			console.error('Pagefind search error:', err);
			return [];
		}
	}

	const onSelect = (e: any) => {
		const selectedItem = JSON.parse(e.value[0]);

		console.log(selectedItem.value);
		console.log(selectedItem.source);
		console.log(e);
		selected = [""];
		if (selectedItem.source == "pagefind") {
			close();
			goto(selectedItem.value);
		} else if (selectedItem.value.startsWith("https://wiki.w9yt.org/index.php")) {
			window.open(selectedItem.value, '_blank');
		} else if (selectedItem.value != "====NORESULT====") {
			window.open('https://wiki.w9yt.org/wiki/' + selectedItem.value, '_blank');
		}
			
	}

	const onInteractOutside = () => {
		if (!preOpen) {
			close();
		}
	};

	let hideButton = $derived.by(() => {
		if (isActive) {
			return 'hidden';
		}

		return '';
	});

	let hideSearchInput = $derived.by(() => {
		if (isActive) {
			return '';
		}

		return 'hidden';
	});

	function close() {
		console.log('Close search');
		comboboxOpen = false;
		isActive = false;
	}

	let comboboxOpen = $state(false);

	// svelte-ignore non_reactive_update
	let wrapperClass = 'relative';

	// svelte-ignore non_reactive_update
	let boxClass = 'absolute top-0 right-full';

	// svelte-ignore state_referenced_locally
	if (preOpen) {
		isActive = true;
		wrapperClass = '';
		boxClass = '';
	}

	$effect(() => {
		if (isActive) {
			(async () => {
				await tick();
				document.getElementById('globalWikiSearchInput')?.focus();
			})();
		}
	});
</script>

<button
	type="button"
	class="btn {hideButton} {buttonIconClass}"
	onclick={() => (isActive = true)}
	aria-label="Search W9YT"
>
	{#if children}
		{@render children()}
	{:else}
		<SearchIcon class="size-5" aria-hidden="true" />
	{/if}
</button>

{#if !fullScreen}
	<div class="{wrapperClass}" transition:slide={{ axis: 'y', duration: 300 }}>
		<Combobox
			class="{boxClass} max-w-sm min-w-2xs px-2 {hideSearchInput} bg-[var(--color-surface-100-900)]"
			placeholder="Search..."
			{collection}
			{onOpenChange}
			{onInputValueChange}
			{onInteractOutside}
			{onSelect}
			open={comboboxOpen}
			onPointerDownOutside={onInteractOutside}
			onFocusOutside={onInteractOutside}
			inputBehavior="autohighlight"
			selectionBehavior="clear"
			value={selected}
			onkeydown={(e) => {
				if (e.key === 'Escape' && !preOpen) close();
			}}
		>
			<Combobox.Control>
				<Combobox.Input id="globalWikiSearchInput" />
				<Combobox.Trigger />
			</Combobox.Control>

			<Portal>
				<Combobox.Positioner>
					<Combobox.Content class="z-50">
						{#each items as item (item.value)}
							<Tooltip positioning={{ placement: 'bottom' }}>
								<Tooltip.Trigger>
									<Combobox.Item {item}>
										<Combobox.ItemText>
											<div class="flex items-center gap-2">
												<span>{item.label}</span>

												{#if item.source === 'pagefind'}
													<span class="text-xs opacity-60">Pagefind</span>
												{/if}
											</div>
										</Combobox.ItemText>

										<Combobox.ItemIndicator />
									</Combobox.Item>
								</Tooltip.Trigger>

								<Portal>
									<Tooltip.Positioner>
										<Tooltip.Content class="card p-2 bg-surface-200-800 z-60">
											<p class="max-w-sm globalSearchSnip">
												{@html item.snippet}
											</p>

											{#if item.source !== 'pagefind'}
												<p class="text-xs pt-2">
													Size: {item.size} - Word Count: {item.wordCount}
												</p>
											{/if}

											<Tooltip.Arrow
												class="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-200-800)]"
											>
												<Tooltip.ArrowTip />
											</Tooltip.Arrow>
										</Tooltip.Content>
									</Tooltip.Positioner>
								</Portal>
							</Tooltip>
						{/each}
					</Combobox.Content>
				</Combobox.Positioner>
			</Portal>
		</Combobox>
	</div>
{/if}

{#if isActive && fullScreen}
	<!-- Search Panel -->

	<div class="fixed inset-0 z-50 justify-center pt-1 lg:pt-24 animate-slide-down bg-[var(--color-surface-100-900)] px-2 lg:px-0" transition:slide={{ axis: 'y', duration: 300 }}>


		<div class="lg:flex items-start w-screen lg:w-5/6 max-w-6xl mx-auto lg:pb-5">
			<p class="text-2xl font-(family-name:--font-display) font-semibold tracking-widest p-3 lg:p-0 lg:my-3 flex space-between">
				<label for="globalWikiSearchInput">Search W9YT</label>
				<!-- Mobile Close Button -->
				<button class="ml-auto lg:hidden text-right inline-block pr-3" onclick={close}>
					<X class="size-5" />
				</button>
			</p>

		</div>
		
		<div class="lg:flex items-start justify-center">
				

			<div class="flex items-center w-screen lg:w-5/6 max-w-full lg:max-w-6xl">

				<Combobox
					class="{hideSearchInput} bg-[var(--color-surface-100-900)] overflow-auto"
					placeholder="Type to search..."
					{collection}
					{onOpenChange}
					{onInputValueChange}
					{onInteractOutside}
					{onSelect}
					open={comboboxOpen}
					onPointerDownOutside={onInteractOutside}
					onFocusOutside={onInteractOutside}
					inputBehavior="autohighlight"
					selectionBehavior="clear"
					value={selected}
					onkeydown={(e) => {
						if (e.key === 'Escape' && !preOpen) close();
					}}
				>
					<Combobox.Control>
						<Combobox.Input id="globalWikiSearchInput" aria-label="Search W9YT" class="py-4"/>
					</Combobox.Control>
					<Portal>
						<Combobox.Positioner class="fixed left-0 w-screen">
							<Combobox.Content class="z-50 max-h-[50vh] overflow-y-auto">
								{#each items as item (item.value)}
									<Combobox.Item {item}>
										<Combobox.ItemText>
											<div class="py-1">
												<div class="flex items-center gap-2">
													<p class="text-lg font-semibold">
														{item.label}
													</p>

													{#if item.source === 'pagefind'}
														<span class="text-xs opacity-60">
															Website
														</span>
													{:else}
														<span class="text-xs opacity-60">
															Wiki
														</span>
													{/if}
												</div>

												<p class="globalSearchSnip font-light">
													{@html item.snippet}
												</p>

												{#if item.source !== 'pagefind'}
													<p class="text-xs pt-2">
														Size: {item.size} - Word Count: {item.wordCount}
													</p>
												{/if}
											</div>
										</Combobox.ItemText>
									</Combobox.Item>
								{/each}
							</Combobox.Content>
						</Combobox.Positioner>
					</Portal>
				</Combobox>

				<!-- Close Button -->
				<button
					class="btn btn-sm hidden lg:block"
					onclick={close}
					aria-label="Close search"
				>
					<X class="size-5" role="none" />
				</button>
			</div>
		</div>

		<button
			onclick={close}
			class="fixed inset-x-0 bottom-0 border-t border-border text-center py-3 lg:hidden"
		>
			Close
		</button>
	</div>
{/if}