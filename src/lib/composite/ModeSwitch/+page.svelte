<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	let checked = $state(false);

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'dark';
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
	};

	onMount(() => {
		if (!localStorage.getItem('modeSet') || false) {
			localStorage.setItem('modeSet', 'set');

			const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
			const isDark = darkModeMql.matches;

			checked = isDark;
			localStorage.setItem('mode', isDark ? 'dark' : 'light');
			document.documentElement.setAttribute('data-mode', isDark ? 'dark' : 'light');
		}
	});
</script>

<svelte:head>
	<script>
		document.documentElement.setAttribute('data-mode', localStorage.getItem('mode') || 'dark');
	</script>
</svelte:head>

<Switch {checked} {onCheckedChange} aria-label="Toggle dark and light mode" role="switch" class="px-1 md:px-2">
	<Switch.Control>
		<Switch.Thumb class="dark:bg-black">
			{#if checked}
				<Moon class="h-4 w-4 text-white" />
			{:else}
				<Sun class="h-4 w-4" />
			{/if}
		</Switch.Thumb>
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
