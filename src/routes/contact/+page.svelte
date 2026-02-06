<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRightIcon, Mail } from '@lucide/svelte';

	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

    let current = $derived(page.url.hash || '#officers');
	console.log(page.url.hash);
</script>

<svelte:head>
	<meta property="og:title" content="Contact BARS | Badger Amateur Radio Society" />
	<title>Contact BARS | Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="The Badger Amateur Radio Society (BARS) is the amateur radio club at the University of Wisconsin-Madison"
	/>
</svelte:head>


<div class="mx-auto max-w-3xl pt-10 text-lg px-5">

	<h2 class="text-4xl/15 pb-10 font-semibold">
		Contact the Badger Amateur Radio Society
	</h2>
	

	<Tabs value={current} onValueChange={(details) => (current = details.value)}>
		<Tabs.List>
			<Tabs.Trigger value="#officers">
				{#snippet element(attributes)}
					<a {...attributes as HTMLAnchorAttributes} href="#officers">The Officers</a>
				{/snippet}
			</Tabs.Trigger>
			<Tabs.Trigger value="#ece">
				{#snippet element(attributes)}
					<a {...attributes as HTMLAnchorAttributes} href="#ece">Electrical & Computer Engineering</a>
				{/snippet}
			</Tabs.Trigger>
			<Tabs.Trigger value="#uw-foundation">
				{#snippet element(attributes)}
					<a {...attributes as HTMLAnchorAttributes} href="#uw-foundation">University of Wisconsin Foundation</a>
				{/snippet}
			</Tabs.Trigger>
			<Tabs.Indicator />
		</Tabs.List>
		<Tabs.Content value="#officers">
			<p class="pb-2">
				You can email the officers of BARS at <span class="select-all">officers@w9yt.org</span>
			</p>
			<button type="button" class="btn preset-filled mt-1" onclick={e => location.href="mailto:officers@w9yt.org"}>
				<span>Contact Us</span>
				<Mail size={18} />
			</button>

			<p class="pb-2 pt-4">
				For items larger than a standard US first class letter:
			</p>
			<p class="pb-2">
				<code>
				1601, Engineering Research Building <br>
				1500 Engineering Drive <br>
				Madison, WI 53706 <br>
				USA
				</code>
			</p>

			<p class="pb-2 pt-4">
				For standard US first class letters or smaller:
			</p>
			<p class="pb-2">
				<code>
				Badger Amateur Radio Society, Room 1150<br>
				1415 Engineering Drive<br>
				Madison, WI 53706 <br>
				USA
				</code>
			</p>

		</Tabs.Content>
		<Tabs.Content value="#ece">
			<p class="pb-2">
				The Department of Electrical & Computer Engineering can be reached at:
			</p>
			<p class="pb-2">
				1415 Engineering Drive <br>
				Madison, WI 53706
			</p>
			<p>
				<a href="mailto:contact-us@engr.wisc.edu">contact-us@engr.wisc.edu</a>
			</p>
		</Tabs.Content>
		<Tabs.Content value="#uw-foundation">
			<p class="pb-2">
				The Badger Amateur Radio Society receives select funding from the University of Wisconsin Foundation.
			</p>
			<p class="pb-2">
				The University of Wisconsin Foundation raises, invests and distributes funds for the benefit of the University of Wisconsin-Madison.
			</p>
			<p class="pb-2">
				For more information about the UW-Foundation visit <a href="https://www.supportuw.org/" class="underline" target="_blank">supportuw.org</a>.
			</p>
			<p>
				To donate to BARS via UW-Foundation visit our donation page:
			</p>
			<a href="/charitable-giving/" target="_blank">
				<button type="button" class="btn preset-filled mt-5">
					<span>Donate Now</span>
					<ArrowRightIcon size={18} />
				</button>
			</a>
		</Tabs.Content>
	</Tabs>
</div>
