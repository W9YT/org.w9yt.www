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
    urlPersonal="https://hadleyso.com/?utm_source=www.w9yt.org&ref=www.w9yt.org"
    gpg="676F C5F3 03C1 C437 E0A0 E923 C52B 0689 6072 D856,https://keys.openpgp.org/vks/v1/by-fingerprint/676FC5F303C1C437E0A0E923C52B06896072D856"
/>