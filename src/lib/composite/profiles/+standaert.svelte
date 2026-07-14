<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "President"} = $props()
</script>


<Profile
    name="Will Standaert"
    department="Civil & Environmental Engineering; College of Engineering"
    blurb="KE9CMP"
    email="ws@w9yt.org"
    position={position}
/>