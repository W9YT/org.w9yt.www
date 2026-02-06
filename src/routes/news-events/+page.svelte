<script lang="ts">

	function getPosts() {
		const svxFiles = import.meta.glob('./**/+page.svx', { eager: true });
		const posts = Object.entries(svxFiles).map(([path, mod]) => ({
			path: path.slice(0, -'+page.svx'.length),
			metadata: mod.metadata,
			default: mod.default
		}));

		posts.sort((a, b) => {
			const dateA = new Date(a.metadata.Published).getTime();
			const dateB = new Date(b.metadata.Published).getTime();
			return dateB - dateA;
		});

		return posts;
	}
	const posts = getPosts();

</script>

<svelte:head>
	<meta property="og:title" content="News & Events | Badger Amateur Radio Society" />
	<title>News & Events | Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="List of News & Events from The Badger Amateur Radio Society at the University of Wisconsin-Madison"
	/>
</svelte:head>


<!-- Content -->
<div class="mx-auto max-w-3xl pt-5 px-2">
	<h2 class="my-4 text-2xl font-semibold pb-5">News & Events</h2>

	<div class="pl-3">
		{#each posts as post}
			{#if post.metadata.Hidden != true}
				<a href="{post.path}" class="hover:underline text-lg font-semibold">
					{post.metadata.Title}
				</a>
				<p class="text-sm pb-5">{post.metadata.Author} | {post.metadata.Published}</p>
				
			{/if}
		{/each}
	</div>

</div>

