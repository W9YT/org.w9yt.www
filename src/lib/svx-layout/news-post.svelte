<script lang="ts">
    export let Title;
    export let Author;
    export let Published;
    export let Excerpt;

    const date = new Date(Published.replace(" ", "T")); 
    const isoWithOffset = date.toISOString().replace("Z", "+00:00");
</script>

<svelte:head>
	<meta property="og:title" content="{Title} | News & Events | Badger Amateur Radio Society" />
	<title>{Title} | News & Events | Badger Amateur Radio Society</title>

    <meta name="author" content="{Author}">
	<meta
		name="description"
		content="{Excerpt}"
	/>

    <meta property="article:published_time" content="{isoWithOffset}"/>
</svelte:head>

<div class="max-w-6xl mx-auto px-1">

    <p class="pt-10 text-lg font-(family-name:--font-display) hidden lg:block">
        News & Events
    </p>

    <section class="grid grid-cols-4 gap-10 pt-10 px-5 md:px-3">

        <div class="col-span-4 md:col-span-3">
                <h1 class="text-5xl/15 pb-10 font-semibold">{ Title }</h1>


                <div class="block md:hidden pb-10">
                        <p class="text-2xl">{ Author }</p>
                        <p>{ Published }</p>
                </div>

                <slot>
                    <!-- the mdsvex content will be slotted in here -->
                </slot>
        </div>

        <div class="col-span-4 md:col-span-1 md:pt-8 hidden md:block">
                <p class="text-2xl">{ Author }</p>
                <p>{ Published }</p>
                <p class="py-4">{Excerpt}</p>
        </div>

    </section>

    <section class="pt-10 pb-20 px-5 md:px-1" data-nosnippet> <!-- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag -->
        <hr class="pt-10">
        <p class="italic font-light">
            Since 1930, the Badger Amateur Radio Society has been W9YT, the amateur radio club at the 
            University of Wisconsin-Madison, serving UW-Madison students and the greater community.
            <br><br>
            Read more <a class="underline" href="/news-events/">news here</a>.
        </p>
    </section>

</div>
