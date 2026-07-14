<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Vice President"} = $props()
</script>


<Profile
    photo="/assets/profile/joseph_berg.jpeg"
    name="Joe Berg"
    department="Electrical & Computer Engineering; College of Engineering"
    position={position}
    email="jpberg@wisc.edu"
    address="3438, Engineering Hall
    1415 Engineering Dr
    Madison, WI "
    blurb="PhD candidate in the Electrical & Computer Engineering department focusing in Applied Electromagnetics."
/>