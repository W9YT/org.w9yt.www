<script lang="ts">
	// UPDATE THESE TWO EVERY YEAR
	let maxYear = 2026;
	let yearSelect = $state('2026');

	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import Behdad from '$lib/composite/profiles/+behdad.svelte';
	import Bouvy from '$lib/composite/profiles/+bouvy.svelte';
	import Culek from '$lib/composite/profiles/+culek.svelte';
	import Czerwonka from '$lib/composite/profiles/+czerwonka.svelte';
	import Daruwalla from '$lib/composite/profiles/+daruwalla.svelte';
	import Jamieson from '$lib/composite/profiles/+jamieson.svelte';
	import Kraemer from '$lib/composite/profiles/+kraemer.svelte';
	import Pilcher from '$lib/composite/profiles/+pilcher.svelte';
	import Rodgers from '$lib/composite/profiles/+rodgers.svelte';
	import So from '$lib/composite/profiles/+so.svelte';
	import Standaert from '$lib/composite/profiles/+standaert.svelte';
	import Stephens from '$lib/composite/profiles/+stephens.svelte';

	const years = Array.from({ length: maxYear - 2022 + 1 }, (_, i) => 2022 + i).reverse();
</script>

<svelte:head>
	<meta property="og:title" content="Leadership | Badger Amateur Radio Society" />
	<title>Leadership | Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="The Badger Amateur Radio Society (BARS) is the amateur radio club at the University of Wisconsin-Madison"
	/>
</svelte:head>

<div class="mx-auto max-w-4xl px-5 pt-10 text-lg">
	<h2 class="pb-10 text-4xl/9 md:text-4xl/15 font-semibold">Leadership</h2>

	<Tabs value={yearSelect} onValueChange={(details) => (yearSelect = details.value)}>
		<Tabs.List class="overflow-x-scroll scrollbarHide">
			{#each years as year}
				<Tabs.Trigger value={year.toString()}>{year.toString()}</Tabs.Trigger>
			{/each}
			<Tabs.Indicator />
		</Tabs.List>

		<!-- ADD A NEW TABS.CONTENT WITH YEAR EVERY YEAR -->
		<Tabs.Content value="2026">
			<Behdad/>
			<Czerwonka/>
			<Culek/>
			<So/>
			<Standaert/>
		</Tabs.Content>

		<Tabs.Content value="2025">
			<Behdad/>
			<Czerwonka/>
			<Culek/>
			<Stephens/>
			<Jamieson/>
		</Tabs.Content>

		<Tabs.Content value="2024">
			<Behdad/>
			<Czerwonka/>
			<Pilcher/>
			<Stephens/>
			<Culek position="Treasurer"/>
			<Jamieson/>
		</Tabs.Content>

		<Tabs.Content value="2023">
			<Behdad/>
			<Czerwonka/>
			<Pilcher/>
			<Stephens/>
			<Jamieson/>
		</Tabs.Content>

		<Tabs.Content value="2022">
			<Behdad/>
			<Czerwonka/>
			<Rodgers/>
			<Bouvy/>
			<Kraemer/>
			<Daruwalla position="Treasurer"/>
		</Tabs.Content>

	</Tabs>
</div>
