<script lang="ts">
    export let Title;
    export let Author;
    export let Published;
    export let Excerpt;
    export let ProfileTag;

    const date = new Date(Published.replace(" ", "T")); 
    const isoWithOffset = date.toISOString().replace("Z", "+00:00");

    import Profiles from "$lib/composite/+profiles.svelte";

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

    <section class="grid grid-cols-10 gap-10 pt-10 px-5 md:px-3 min-h-screen">

        <div class="col-span-10 md:col-span-7">
                <h1 class="text-5xl/15 pb-10 font-semibold">{ Title }</h1>


                <div class="block md:hidden pb-10">
                    {#if ProfileTag}
                        <svelte:component this={Profiles} {ProfileTag} />
                        <p class="pl-2 opacity-50"><b>Published:</b> { Published }</p>
                    {:else}
                        <p class="text-2xl">{ Author }</p>
                        <p class="opacity-50"><b>Published:</b> { Published }</p>
                    {/if}
                </div>

                <slot>
                    <!-- the mdsvex content will be slotted in here -->
                </slot>
        </div>

        <div class="col-span-0 md:col-span-3 md:pt-8 hidden md:block">
            {#if ProfileTag}
                <svelte:component this={Profiles} {ProfileTag} />
                <p class="pl-2 opacity-50"><b>Published:</b> { Published }</p>
            {:else}
                <p class="text-2xl">{ Author }</p>
                <p class="opacity-50"><b>Published:</b> { Published }</p>
            {/if}
                
        </div>

    </section>

    <section class="pt-10 pb-20 px-5 md:px-1" data-nosnippet> <!-- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag -->
        <hr class="pt-10 opacity-40">
        <p class="italic font-light">
            Since 1930, the Badger Amateur Radio Society has been W9YT, the amateur radio club at the 
            University of Wisconsin-Madison, serving UW-Madison students and the greater community.
            <br><br>
            Read more <a class="underline" href="/news-events/">news here</a>.
        </p>
        <hr class="mt-10 opacity-40">
    </section>

</div>
