<script lang="ts">
	import heroImage from '$lib/assets/ERB-film.jpg';
	import landerContent from '$lib/menus/lander-content.json'
</script>

<svelte:head>
	<meta property="og:title" content="Badger Amateur Radio Society" />
	<title>Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="The Badger Amateur Radio Society (BARS) is the amateur radio club at the University of Wisconsin-Madison"
	/>
</svelte:head>

<div class="overflow-hidden" style="max-height: 40vh; vertical-align: middle;">
	<img
		alt="Office tower against a blue cloudy sky with HAM radio antennas on top of the roof"
		class="w-screen"
		src={heroImage}
	/>
</div>

<section class="mx-auto max-w-5xl">
	<p class="mx-auto max-w-4xl pt-10 text-center text-3xl md:text-4xl">
		<b class="font-(family-name:--font-display)">Badger Amateur Radio Society</b>, amateur radio at
		the University of Wisconsin-Madison since 1930
	</p>
	<p class="mx-auto max-w-4xl pt-3 text-center text-3xl md:text-4xl">
		QSX <b class="font-(family-name:--font-display)">W9YT</b>?
	</p>
</section>

<section class="mx-auto max-w-7xl py-25">
	<div class="flex justify-center flex-wrap gap-4">

		{#each landerContent as item}
			<a
				href={item.link}
				class="block max-w-sm divide-y divide-surface-200-800 overflow-hidden card border-[1px] border-surface-200-800 preset-filled-surface-100-900 card-hover m-3"
			>
				<article class="space-y-4 p-4">
					<div>
						<h2 class="h6">{item.pretext}</h2>
						<h3 class="h3">{item.title}</h3>
					</div>
					<p class="opacity-60">
						{item.body}
					</p>
				</article>

				<!-- <footer class="flex items-center justify-between gap-4 p-4">
					<small class="opacity-60">{item.footer}</small>
				</footer> -->
			</a>
		{/each}
	</div>

</section>
