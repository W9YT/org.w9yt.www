<script lang="ts">
	import { ArrowRightIcon } from "@lucide/svelte";

</script>

<svelte:head>
	<meta property="og:title" content="Donate | Badger Amateur Radio Society" />
	<title>Donate | Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="Donating to The Badger Amateur Radio Society, the amateur radio club at the University of Wisconsin-Madison"
	/>
</svelte:head>

<div class="mx-auto max-w-3xl px-5 pt-10 text-lg">
	<h2 class="pb-10 text-4xl/15 font-semibold">Donating and Charitable Giving</h2>

	<p class="py-4">
		For your convenience, The Badger Amateur Radio Society has setup an online donation system with
		the UW Foundation. The online form allows you to make a tax deductible donation using a credit
		card.
	</p>
	<p class="py-4">
		Below you will find a link titled “Make a donation now.” After following this link, you will be
		taken to the UW Foundations website.
	</p>
	<p class="py-4">
		Please be sure to select “College of Engineering” and direct your gift to the 
		<b>“Badger Amateur Radio Society Fund”</b>, or your donation may go to the wrong account.
	</p>
	<a href="https://secure.supportuw.org/give/" target="_blank">
		<button type="button" class="btn preset-filled mt-5">
			<span>Donate Now</span>
			<ArrowRightIcon size={18} />
		</button>
	</a>

</div>
