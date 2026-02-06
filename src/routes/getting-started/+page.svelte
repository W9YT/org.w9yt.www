<script lang="ts">
	import { goto } from "$app/navigation";
	import { GraduationCap, MessageCircleMore, Mail } from "@lucide/svelte";

</script>

<svelte:head>
	<meta property="og:title" content="Joining | Badger Amateur Radio Society" />
	<title>Joining | Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="Joining the Badger Amateur Radio Society"
	/>
</svelte:head>


<div class="mx-auto max-w-3xl pt-10 text-lg px-5">

	<h2 class="text-4xl/9 md:text-4xl/15 pb-10 font-semibold">
		Joining the Badger Amateur Radio Society
	</h2>

	<h2 class="text-2xl">
		UW-Madison Students
	</h2>
	
	<p class="py-4">
		Visit our WIN page to add yourself to the roster, and join the Discord. 
		Meetings for Spring 2026 are every Tuesday at 4PM in <a class="underline" href="/room-1601/">the Shack</a>.
	</p>
	<a href="https://win.wisc.edu/organization/bars" target="_blank">
		<button type="button" class="btn preset-filled mt-1">
			<span>WISC WIN</span>
			<GraduationCap size={18} />
		</button>
	</a>

	
	<button type="button" class="btn preset-filled mt-1" onclick={e => location.href="https://discord.gg/bZezMYCH9J"}>
		<span>Discord</span>
		<MessageCircleMore size={18} />
	</button>

	<h2 class="text-2xl pt-10">
		Community Members
	</h2>
	
	<p class="py-4">
		Join the Discord or send us an email.
	</p>
	<button type="button" class="btn preset-filled mt-1" onclick={e => goto("/contact/")}>
		<span>Contact Us</span>
		<Mail size={18} />
	</button>


</div>
