<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Vice President"} = $props()
</script>


<Profile
    photo="/assets/profile/stephens_connor.jpg"
    name="Connor Stephens"
    salutation="PhD"
    department="Department of Forest and Wildlife Ecology; College of Agricultural & Life Sciences"
    position={position}
    email="cwstephens@wisc.edu"
    phone="(608) 890-3160"
    address="120 Russell Labs
1630 Linden Drive
Madison, WI 53706"
    urlResearch="https://silvis.forest.wisc.edu/staff/stephens-connor/"
/>