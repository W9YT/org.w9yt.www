<script lang="ts">
	import heroImage from '$lib/assets/ERB-film.jpg';
	import landerContent from '$lib/menus/lander-content.json'
	import img1 from '$lib/stock/michael_kastelic-radio-4695874_1280.jpg'

	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	let current = $derived(page.url.hash || '#K3ZO');
	
	import { ChevronRight } from '@lucide/svelte';
	import { page } from '$app/state';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
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
		<b class="font-(family-name:--font-display) decoration-(--theme-red-500) underline">Badger Amateur Radio Society</b>, amateur radio at
		the University of Wisconsin-Madison since 1930
	</p>
	<p class="mx-auto max-w-4xl pt-3 text-center text-3xl md:text-4xl">
		QSX <b class="font-(family-name:--font-display) decoration-(--theme-red-500) underline">W9YT</b>?
	</p>
</section>

<section class="mx-auto max-w-7xl py-25">
	<div class="flex justify-center flex-wrap gap-4">

		{#each landerContent as item}
			<a
				href={item.link}
				class="block max-w-sm divide-y divide-surface-200-800 overflow-hidden card border-[1px] border-surface-200-800 preset-filled-surface-100-900 card-hover m-3 hover:border-(--theme-red-300)"
				aria-label={item.title}
			>
				<article class="space-y-4 p-4">
					<div>
						<h2 class="h6">{item.pretext}</h2>
						<h3 class="h3 font-bold tracking-tight">{item.title}</h3>
					</div>
					<p class="opacity-60">
						{item.body}
					</p>
				</article>
			</a>
		{/each}
	</div>

</section>

<section class="mx-auto max-w-7xl py-25">

	<div class="grid gap-8 md:grid-cols-2 md:items-center px-5">
		<!-- Image (on mobile: top, on desktop: right) -->
		<div class="order-1 md:order-2">
			<img
			src="{img1}"
			alt="Handheld digital radio with microphone"
			class="w-full rounded-lg object-cover max-h-40 md:max-h-fit"
			/>
		</div>

		<!-- Text (on mobile: bottom, on desktop: left) -->
		<div class="order-2 md:order-1 space-y-4">
			<h2 class="text-2xl font-bold tracking-tight md:text-3xl">
				What is Ham radio?
			</h2>
			<p class="text-gray-600 dark:text-gray-200">
				A hobby built on curiosity and connection, ham radio opens the door to a whole world of communication and experimentation.
			</p>
			<a
				class="inline-flex items-center rounded-md bg-(--theme-red-500) hover:bg-(--theme-red-300 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				href="/getting-started/what-is-ham-radio/"
			>
				Learn More <ChevronRight class="pl-1 size-5" role="none"/>
			</a>
		</div>
	</div>

</section>

<section class="mx-auto max-w-7xl py-25 px-5">
	<h2 class="text-2xl font-bold tracking-tight md:text-3xl leading-none">
		Since 1930 &mdash; decades of history and stories
	</h2>
	<p class="py-3 xl:py-0">
		Read about how W9YT was founded from the perspective of two alumni K3ZO and K3ZO.
	</p>

	<Tabs value={current} onValueChange={(details) => (current = details.value)} class="pt-5 lg:pt-12">
		<Tabs.List class="overflow-x-scroll scrollbarHide">
			<Tabs.Trigger value="#K3ZO">
				{#snippet element(attributes)}
					<a {...attributes as HTMLAnchorAttributes} href="#K3ZO">Fred Laun, K3ZO</a>
				{/snippet}
			</Tabs.Trigger>
			<Tabs.Trigger value="#NA9D">
				{#snippet element(attributes)}
					<a {...attributes as HTMLAnchorAttributes} href="#NA9D">Steve Dubberstein, NA9D</a>
				{/snippet}
			</Tabs.Trigger>
			<Tabs.Indicator class="bg-(--theme-red-500)" />
		</Tabs.List>
		<Tabs.Content value="#K3ZO" class="max-w-3xl">
			<p class="pb-5">
				Fred Laun, HK3NBB/K3ZO was a founding member of the Badger Amateur Radio Society at the
				University of Wisconsin-Madison. <br><br>After graduating from the University of Wisconsin-Madison
				 with a BA in Political Science / Journalism in 1962, he became a Foreign Service
				Officer with the United States Information Agency in 1963 and retired in 1988, receiving the
				Secretary of State's Award in 1974.
			</p>

			<p class="pb-5">
				<a
					class="inline-flex items-center rounded-md bg-(--theme-red-500) hover:bg-(--theme-red-300) px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					href="/history/founding-w9yt-laun/"
				>
					Read about Laun's experience founding W9YT <ChevronRight role="none" class="pl-1 size-5" />
				</a>
			</p>

			<p class="pb-5">
				See also 
				<a href="https://www.arrl.org/news/amateur-radio-contesting-great-fred-laun-k3zo-silent-key" target="_blank" rel="nofollow" class="underline">
					ARRL: Amateur Radio Contesting Great Fred Laun, K3ZO, Silent Key
				</a>
			</p>
		</Tabs.Content>
		<Tabs.Content value="#NA9D" class="max-w-3xl">
			<p class="pb-5">
				Steve Dubberstein, NA9D/VS6WO (ex. WB9PYE) originally published an article in the April 1983 issue of
				The Badger State Smoke Signals. It was titled "The Badger Amateur Radio Society Today" and talks 
				about what W9YT was like in the 80's.
			</p>

			<p class="pb-5">
				<a
					class="inline-flex items-center rounded-md bg-(--theme-red-500) hover:bg-(--theme-red-300) px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					href="/history/founding-w9yt-dubberstein/"
				>
					Read Dubberstein's experience with W9YT <ChevronRight role="none" class="pl-1 size-5" />
				</a>
			</p>

		</Tabs.Content>

	</Tabs>
</section>	

<section class="lg:mx-auto max-w-7xl py-15 px-5 lg:px-15 mb-20  bg-(--theme-red-100) dark:text-black">
	<h2 class="text-2xl font-bold tracking-tight md:text-3xl">
		Join us!
	</h2>
	<p class="text-lg lg:text-xl pt-3">
		The Badger Amateur Radio Society, where you can get your license, your skills, and your signal on the air.
		Open to undergraduates, graduates, and the community!
	</p>
	<p class="pt-10">
		<a
			class="inline-flex items-center rounded-md bg-gray-50 hover:bg-(--theme-red-400) hover:text-white px-4 py-2 text-sm font-medium text-(--theme-red-500) focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			href="/getting-started/"
		>
			Get started <ChevronRight role="none" class="pl-1 size-5" />
		</a>
	</p>
</section>
