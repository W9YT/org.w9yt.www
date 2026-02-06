<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Chief Engineer"} = $props()
</script>


<Profile
    name="Diana Kraemer"
    department="Department of Electrical and Computer Engineering; College of Engineering"
    position={position}
/>