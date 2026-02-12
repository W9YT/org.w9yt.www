<script lang="ts">
	import { SearchIcon, X } from '@lucide/svelte';
	import { Combobox, Portal, type ComboboxRootProps, useListCollection, Tooltip } from '@skeletonlabs/skeleton-svelte';
	import { tick } from 'svelte';

	let {preOpen = false, isActive = $bindable(false) } = $props();

	const dataPrompt = [
		{ label: 'Type to search', value: 'Type to search', snippet: "", size: 0, wordCount: 0 }
	];
	const dataError = [
		{ label: 'Error searching', value: 'Error searching', snippet: "", size: 0, wordCount: 0 }
	];
	let selected = $state([""]);



	let items = $state(dataPrompt);

	const collection = $derived(
		useListCollection({
			items: items,
			itemToString: (item) => item.label,
			itemToValue: (item) => item.value
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
			return;
		}

		const url = "https://wiki.w9yt.org/api.php";

		const params = new URLSearchParams({
			action: "query",
			list: "search",
			srsearch: query,
			format: "json",
			srwhat: "text",
			origin: location.origin
		});

		if (debounceTimer) clearTimeout(debounceTimer);

		debounceTimer = setTimeout(async () => {

				try {
					const response = await fetch(`${url}?${params}`);
					const json = await response.json();
					// console.log(json)
					if (json?.query?.search) {
						items = json.query.search.map((result: any) => ({
							label: result.title,
							value: result.title,
							snippet: result.snippet,
							size: result.size,
							wordCount: result.wordcount,
						}));

						if (items.length < 1) {
							items = [
								{ label: 'No results', value: '====NORESULT====', snippet: "No results were found with that query", size: 0, wordCount: 0 },
								{ label: 'Create Page: ' + query, value: 'https://wiki.w9yt.org/index.php?veaction=edit&create=Create+page&title=' + query, snippet: "Go to the wiki and create a page with this title", size: 0, wordCount: 0 }
							];
						}
					} else {
						items = [{ label: 'No results', value: '====NORESULT====', snippet: "", size: 0, wordCount: 0 }];
					}
				} catch (err) {
					console.error("MediaWiki search error:", err);
					items = dataError;
				}

		}, 300);


	};

	const onSelect = (e: any) => {
		var selValue = e.value[0];
		console.log(selValue);
		selected = [""];
		if (selValue.startsWith("https://wiki.w9yt.org/index.php")) {
			window.open(selValue, '_blank');
		} else if (selValue != "====NORESULT====") {
			window.open('https://wiki.w9yt.org/wiki/' + e.value[0], '_blank');
		}
			
	}

	const onInteractOutside = () => {
		if (!preOpen) {
			isActive = false;
		}
	}

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


	// svelte-ignore non_reactive_update
	let wrapperClass = "relative";
	// svelte-ignore non_reactive_update
	let boxClass = "absolute top-0 right-full";

	// svelte-ignore state_referenced_locally
	if (preOpen) {
		isActive = true;
		wrapperClass = "";
		boxClass = "";
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

<div class="pt-1">
	<button type="button" class="btn px-1 md:px-4 {hideButton}" onclick={() => (isActive = true)}>
		<SearchIcon class="size-5" />
	</button>

	<div class="{wrapperClass}">
		<Combobox
			class="{boxClass} max-w-sm min-w-2xs px-2 {hideSearchInput} bg-[var(--color-surface-100-900)]"
			placeholder="Search Wiki..."
			{collection}
			{onOpenChange}
			{onInputValueChange}
			{onInteractOutside}
			{onSelect}
			onPointerDownOutside={onInteractOutside}
			onFocusOutside={onInteractOutside}
			inputBehavior="autohighlight"
			selectionBehavior="clear"
			value={selected}
			onkeydown={(e) => {
				if (e.key === 'Escape' && !preOpen) isActive = false;
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
										<Combobox.ItemText>{item.label}</Combobox.ItemText>
										<Combobox.ItemIndicator />
									</Combobox.Item>

								</Tooltip.Trigger>
								<Portal>
									<Tooltip.Positioner>
										<Tooltip.Content class="card p-2 bg-surface-200-800 z-60">
											<p class="max-w-sm globalSearchSnip">
												{@html item.snippet}
											</p>
											<p class="text-xs pt-2">
												Size: {item.size} - Word Count: {item.wordCount}
											</p>
											<Tooltip.Arrow class="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-200-800)]">
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
</div>
