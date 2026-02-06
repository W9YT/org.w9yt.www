<script lang="ts">
	import Profile from "../+profile.svelte";

    let {position = "President "} = $props()
</script>


<Profile
    photo="/assets/profile/culek_skylar.jpg"
    name="Skylar Culek"
    department="Civil & Environmental Engineering; College of Engineering"
    position={position}
    email="sc@w9yt.org"
    blurb="Engineering undergraduate at the University of Wisconsin–Madison with a long-standing passion for amateur radio and applied RF technologies. Active in the Badger Amateur Radio Society since 2022, serving as Treasurer (2023–2024) and currently as President (2024–2025).

    KD9WYX (2023–2024, General Class), AD9FP (2024, Amateur Extra), and presently NQ9Z (2024–present, Amateur Extra). Committed to exploring the technical frontiers of RF communication while fostering community, mentorship, and hands-on experimentation within the amateur radio community.
"
    urlPersonal="https://nq9z.org/"
/>