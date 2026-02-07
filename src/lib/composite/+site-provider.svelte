<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';

    let {uppercase = false} = $props();

	const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
</script>

<Dialog>
	<Dialog.Trigger type="button" class="underline inline-flex items-center">
        {#if uppercase} 
            Site Provider
        {:else}
            site provider
        {/if}
    </Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/80" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-center items-center p-4">
			<Dialog.Content class="card bg-surface-100-900 w-full max-w-xl p-4 space-y-4 shadow-xl overflow-y-auto max-h-[90vh] {animation}">
				<header class="flex justify-between items-center">
					<Dialog.Title class="text-2xl font-bold">Site Provider</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
						<XIcon class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					<h3 class="font-medium text-xl">
                        Badger Amateur Radio Society
                    </h3>
                    <h3 class="font-normal text-md">
                        Registered Student Organization at the University of Wisconsin-Madison <br>
                        Department of Electrical & Computer Engineering <br>
                        College of Engineering 
                    </h3>
                    <p class="pt-2">
                        1601, Engineering Research Building <br> 
                        1500 Engineering Drive <br>
                        Madison, WI 53706 <br>
                        USA
                    </p>

                    <h3 class="font-medium text-xl pt-6">
                        Badger Amateur Radio Society
                    </h3>
                    <h3 class="font-normal text-md">
                        Wisconsin Tax Exempt Organization <br>
                        IRS 501(c)(3) <br>
                        EIN: 33-4775049 <br>
                        Deductibility Code: PC
                    </h3>
                    <p class="pt-2">
                        Badger Amateur Radio Society, Room 1150 <br> 
                        1415 Engineering Drive <br> 
                        Madison, WI 53706 <br> 
                        USA
                    </p>

                    <h3 class="font-medium text-xl pt-6">
                        Service Provider
                    </h3>
                    <p class="pt-2">
                        Hadley So <br>
                        United States <br>
                        <a href="mailto:webmaster@w9yt.org">webmaster@w9yt.org</a> <br>
                        Alternate <button type="button" onclick={e => location.href="https://hadleyso.com/?ref=www.w9yt.org&utm_source=www.w9yt.org"} class="underline">contact info</button>
                    </p>
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
				</footer>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>