<script lang="ts">
	import Profile from "../+profile.svelte";
    let {position = "Secretary / Treasurer "} = $props()

</script>


<Profile
    name="Kyle Daruwalla"
    department="Department of Electrical and Computer Engineering; College of Engineering"
    position={position}
    blurb="KD2HNK"
/>