<script>
	import { goto } from '$app/navigation';
	import { accountManagement } from '$lib/auth/auth';
	import { ChevronRight, House } from '@lucide/svelte';
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
	<h2 class="pb-10 text-4xl/9 font-semibold md:text-4xl/15">Your BARS Account & Profile</h2>

	<button
		type="button"
		class="mt-5 btn preset-filled-surface-200-800 py-2"
		onclick={() => goto("/")}
	>
		<span>Back Home</span>
		<House size={18} role="none" />
	</button>
	<button
		type="button"
		class="mt-5 btn preset-filled-surface-200-800 py-2"
		onclick={() => accountManagement()}
	>
		<span>Manage profile & account</span>
		<ChevronRight size={18} role="none" />
	</button>
</div>
