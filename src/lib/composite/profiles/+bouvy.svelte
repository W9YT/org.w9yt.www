<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Vice President"} = $props()
</script>


<Profile
    name="Alex Bouvy"
    department="Department of Electrical and Computer Engineering; College of Engineering"
    position={position}
    blurb="KD8SXE"
/>