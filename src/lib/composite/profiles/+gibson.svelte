<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Treasurer"} = $props()
</script>


<Profile
    photo="/assets/profile/julia_gibson.jpg"
    name="Julia Gibson"
    department="Electrical & Computer Engineering; College of Engineering"
    position={position}
/>