<script lang="ts">
    export let ProfileTag;

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


    const profiles: Record<string, typeof Behdad> = {
        Behdad,
        Bouvy,
        Culek,
        Czerwonka,
        Daruwalla,
        Jamieson,
        Kraemer,
        Pilcher,
        Rodgers,
        So,
        Standaert,
        Stephens
    }

    var SelectedProfile = profiles[ProfileTag] as typeof Behdad;
</script>

{#if SelectedProfile}
    <svelte:component this={SelectedProfile} />
{/if}