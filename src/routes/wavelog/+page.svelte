<script lang="ts">
	import IamSupport from '$lib/composite/+iam-support.svelte';
	import { ArrowRightIcon, TriangleAlertIcon } from '@lucide/svelte';
	import wizard from '$lib/img/wavelog-wizard-2_4_x.png';
	import clubSwitch from '$lib/img/wavelog-switch-2_4_x.png';
</script>

<svelte:head>
	<meta property="og:title" content="Wavelog | Badger Amateur Radio Society" />
	<title>Wavelog | Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="Wavelog logbook software, provided by The Badger Amateur Radio Society"
	/>
</svelte:head>

<div class="mx-auto max-w-3xl px-5 pt-10 text-lg">
	<h2 class="pb-10 text-4xl/9 font-semibold md:text-4xl/15">Wavelog Logbook</h2>

	<p class="py-4">
		Wavelog is a web based logbook for your personal station; and for the W9YT club station and
		contests. It is available to all members and affiliates.
	</p>
	<div
		class="my-4 grid grid-cols-1 items-center gap-4 card border-2 border-warning-400 p-4 lg:grid-cols-[auto_1fr_auto] dark:border"
	>
		<TriangleAlertIcon role="none" />
		<div>
			<p class="font-bold">UW-Madison Network</p>
			<p class="text-sm">
				New accounts made off-campus (and disconnected from WiscVPN) cannot access Wavelog. Sign in
				while on the UW-Madison network or contact <IamSupport /> to remove limits.
			</p>
		</div>
	</div>
	<a
		href="https://wavelog.w9yt.org/"
		target="_blank"
		onclick={(e) => {
			e.preventDefault();
			window.open('https://wavelog.w9yt.org/header_auth/login', '_blank');
		}}
	>
		<button type="button" class="my-5 btn preset-filled">
			<span>Open Wavelog</span>
			<ArrowRightIcon size={18} role="none" />
		</button>
	</a>

	<h3 class="pt-6 text-2xl/7 font-semibold md:text-3xl/12">Getting Started</h3>
	<ul class="list-inside list-disc py-4">
		<li>
			Click the <span class="italic">Open Wavelog</span> button above
		</li>
		<li>Enter your credentials or create an account; your profile data will be used in Wavelog</li>
	</ul>
	<p class="py-4">
		On your first login, you will see the Wizard for <b>your personal station</b>, not the W9YT
		station:
	</p>
	<img src={wizard} alt="Wavelog First Login Wizard" class="my-2 rounded-container lg:max-w-8/9" />
	<p class="py-4">
		Enter info for your <b>personal</b> station:
	</p>
	<ul class="list-inside list-disc py-4">
		<li>
			<b>Station Name:</b> Display name, for example "Bucky's Dorm Room Station"
		</li>
		<li>
			<b>Station Callsign:</b> Your personal callsign
		</li>
		<li>
			<b>DXCC:</b> <span class="select-all"><code>United States Of America - K</code></span>
		</li>
		<li>
			<b>Station Zone:</b> <span class="select-all"><code>04 / 08</code></span>
		</li>
		<li>
			<b>Locator:</b> <span class="select-all"><code>EN53hb</code></span>
		</li>
	</ul>

	<h3 class="pt-6 text-2xl/7 font-semibold md:text-3xl/12">Logging Under W9YT</h3>
	<p class="py-4">
		After logging in you can switch to the W9YT club. In the top menu bar, select the <b
			>profile icon</b
		>
		and click <b>switch to clubstation</b>
	</p>
	<img src={clubSwitch} alt="Wavelog menu, switch to clubstation" class="mb-5 rounded-container" />
	<p class="py-4">
		Now you can log contacts under the W9YT club callsign by selecting <b>QSO</b> &gt;
		<b>Live QSO</b>.
	</p>
	<h3 class="pt-6 text-2xl/7 font-semibold md:text-3xl/12">More Information</h3>
	<p class="py-4">
		For more information visit the <a
			href="https://docs.wavelog.org/user-guide/logbook/dashboard/"
			target="_blank"
			class="underline">Wavelog User Guide</a
		>.
	</p>
</div>
