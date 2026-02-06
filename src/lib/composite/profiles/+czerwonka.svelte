<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Advisor"} = $props()
</script>


<Profile
    name="Tim Czerwonka"
    department="Network Services; Core Services; Division of Information Technology"
    position={position}
    address="1601, Engineering Research Building
1500 Engineering Drive
Madison, WI 53706"
/>