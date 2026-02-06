<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "Vice President"} = $props()
</script>


<Profile
    photo="http://static.hadleyso.com/media/HadleySo_QuarterBust_Profile_BW.jpg"
    name="Hadley So"
    department="Department of Statistics; School of Computer, Data & Information Sciences"
    position={position}
    email="hs@cs.wisc.edu,hs@w9yt.org"
    address="1601, Engineering Research Building
1500 Engineering Drive
Madison, WI 53706"
    urlDepartment="https://pages.cs.wisc.edu/~hs/"
/>