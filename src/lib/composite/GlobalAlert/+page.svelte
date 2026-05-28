<script lang="ts">
	import { ShieldAlert, X } from "@lucide/svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	type Alert = {
		start: string;
		end: string;
		message: string;
        uuid: string;
	};

	// Load all JSON files in src/lib/alerts
	const modules = import.meta.glob<Alert>('/src/lib/alerts/*.json', {
		eager: true
	});
	// Convert imported modules into an array of alert objects
	const alerts = Object.values(modules);

	// Current time
	const now = new Date();

    let mountedDone = false;
    // Find the first active alert
    let activeAlert = alerts.find((alert) => {
        const start = new Date(alert.start);
        const end = new Date(alert.end);
        return now >= start && now <= end;
    });

    onMount(() => {
        // Check if this alert was previously dismissed
        if (activeAlert) {
            const key = `alert-dismissed-${activeAlert.uuid}`;
            if (localStorage.getItem(key) === 'true') {
                activeAlert = undefined;
            }
        }
        mountedDone = true;
    })

    function dismiss() {
        if (!activeAlert) return;
        const key = `alert-dismissed-${activeAlert.uuid}`;
        localStorage.setItem(key, 'true');
        activeAlert = undefined;
    }
</script>

{#if activeAlert && mountedDone}
    <div class="w-full bg-warning-200 dark:bg-warning-400 text-black font-semibold text-sm lg:text-base px-3 py-2 rounded-md flex items-center" in:fly={{ y: -20, duration: 700, delay: 700 }}>
        <ShieldAlert class="w-5 h-5 shrink-0 mr-2" size=40 /> {activeAlert.message}
        <button
            on:click={dismiss}
            class="ml-auto text-black hover:text-gray-700leading-none"
            aria-label="Close alert"
        >
            <X class="w-5 h-5 shrink-0 ml-2" size=15 />
        </button>
    </div>
{/if}
