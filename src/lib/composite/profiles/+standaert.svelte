<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Treasurer"} = $props()
</script>


<Profile
    name="Will Standaert"
    department="Civil & Environmental Engineering; College of Engineering"
    position={position}
/>