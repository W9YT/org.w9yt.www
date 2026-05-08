<script lang="ts">
    import splatMap from '$lib/img/splat2m.png'
</script>

<svelte:head>
	<meta property="og:title" content="Repeaters W9YT | Badger Amateur Radio Society" />
	<title>Repeaters W9YT | Badger Amateur Radio Society</title>
	<meta
		name="description"
		content="Information about Madison area repeaters run by the Badger Amateur Radio Society"
	/>
</svelte:head>


<div class="mx-auto max-w-3xl pt-10 text-lg px-5">

  <h2 class="text-4xl/9 md:text-4xl/15 pb-10 font-semibold">
    W9YT Madison Area Repeaters
  </h2>

  <p class="py-4">
    146.685 MHz with a PL of 123.0Hz
    <br>
    The location of this repeater is atop Van Hise hall, the tallest building in Madison.
  </p>

  <p class="py-4">
    443.600 MHz with a PL of 123.0Hz.
    <br>
    This repeater also has Echolink capability in addition to being a DMR node on the Brandmeister network and is also YSF capable.
  </p>

  <h3 class="text-2xl pt-8 pb-4 font-semibold">
    W9YT 2m Repeater Splat Map
  </h3>

  <p class="py-4">
    <a
      href="/pdfs/w9yt2msplat.pdf"
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
    >
      Open PDF in new tab
    </a>
  </p>

    <img src="{splatMap}" alt="W9YT 2M Repeater Splat Map" class="rounded-xl md:m-3 mb-3">

    <embed
    type="application/pdf"
    src="/pdfs/w9yt2msplat.pdf"
    width="100%"
    height="900"
    class="border rounded-xl border-1 border-gray-400 dark:border-gray-800"
    title="W9YT Splat Map PDF"/>

</div>
