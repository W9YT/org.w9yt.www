<script lang="ts">
    import Search from '$lib/composite/search/+page.svelte'
</script>

<svelte:head>
	<meta property="og:title" content="Search | Badger Amateur Radio Society" />
	<title>Search | Badger Amateur Radio Society</title>
	<meta name="description" content="Search | Badger Amateur Radio Society" />
	<meta name="robots" content="none" />
</svelte:head>

<div class="grid place-items-center">
    <div class="self-auto pt-15">
        <Search preOpen={true}></Search>
    </div>
</div>