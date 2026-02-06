<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "President"} = $props()
</script>

<Profile
    name="Alex Rodgers"
    department="Department of Nuclear Engineering & Engineering Physics; College of Engineering"
    position={position}
    blurb="KD9MEY"
/>