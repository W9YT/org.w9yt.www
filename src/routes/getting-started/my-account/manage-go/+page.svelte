<script>
	import { accountManagement } from '$lib/auth/auth';
	import { ChevronRight } from '@lucide/svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		accountManagement();
	})
</script>

<svelte:head>
	<meta property="og:title" content="My BARS Account | Badger Amateur Radio Society" />
	<title>My BARS Account | Badger Amateur Radio Society</title>
	<meta name="description" content="My BARS Account | Badger Amateur Radio Society" />
	<meta name="robots" content="none" />
</svelte:head>

<div class="mx-auto max-w-3xl px-5 pt-10 text-lg">
	<button
		type="button"
		class="mt-5 btn preset-filled-surface-200-800 py-2"
		onclick={() => accountManagement()}
	>
		<span>Manage profile & account</span>
		<ChevronRight size={18} role="none" />
	</button>
</div>
