<script lang="ts">
	import heroImage from '$lib/assets/ERB-film.jpg';
</script>

<svelte:head>
	<meta property="og:title" content="The Badger Amateur Radio Society" />
	<title>The Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="The Badger Amateur Radio Society (BARS) is the amateur radio club at the University of Wisconsin-Madison"
	/>
</svelte:head>

<div class="overflow-hidden" style="max-height: 30vh; vertical-align: middle;">
	<img
		alt="Office tower against a blue cloudy sky with HAM radio antennas on top of the roof"
		class="w-screen"
		src={heroImage}
	/>
</div>

<section class="mx-auto max-w-5xl">
	<p>
		The Badger Amateur Radio Society (BARS) is the amateur radio club at the University of
		Wisconsin-Madison. Our FCC-issued callsign, W9YT, has been in use at the University of
		Wisconsin-Madison since 1930.
	</p>

	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deserunt sunt earum? Unde
		assumenda, corporis hic necessitatibus, doloribus ad optio eius ipsam facilis exercitationem,
		alias quo tempore cupiditate sapiente perferendis?
	</p>
</section>
