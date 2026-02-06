<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "President"} = $props()
</script>


<Profile
    name="Nic Pilcher"
    department="Department of Computer Sciences; School of Computer, Data & Information Sciences"
    position={position}
/>