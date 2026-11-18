<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import So from './profiles/+so.svelte';

    let {uppercase = false} = $props();

	const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
</script>

<Dialog>
	<Dialog.Trigger type="button" class="underline inline-flex items-center">
        {#if uppercase} 
            IAM Support
        {:else}
            IAM support
        {/if}
    </Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 bg-surface-50-950/80" />
		<Dialog.Positioner class="fixed inset-0 flex justify-center items-center p-4">
			<Dialog.Content class="card bg-surface-100-900 w-full max-w-xl p-4 space-y-4 shadow-xl overflow-y-auto max-h-[90vh] {animation}" data-pagefind-ignore="all">
				<section class="flex justify-between items-center">
					<Dialog.Title class="text-2xl font-bold">Identity and Access Management Support</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
						<XIcon class="size-4" />
					</Dialog.CloseTrigger>
				</section>
				<Dialog.Description>
                    <p class="pt-2 pl-2 lg:pl-4" data-nosnippet>
						Please <a href=".#" onclick={e => location.href="https://www.w9yt.org/.well-known/global-service-support"} class="underline">open a ticket</a> under "Logins and Accounts". Your account must be at least 24 hours old to open a ticket
					</p>
					<button type="button" class="ml-4 btn btn-md preset-filled-surface-200-800 mt-1 inline-block" onclick={e => location.href="https://www.w9yt.org/.well-known/global-service-support"}>
						<span class="text-md">
							Open a ticket
						</span>
						<!-- <Mail size={12} role="none" /> -->
					</button>
					<p class="pt-2 pl-2 lg:pl-4" data-nosnippet>
                        Otherwise, email the w9yt.org address provided in the profile below
                    </p>
                    <div class="ml-2">
						<So position="IAM Support"/>
					</div>

				</Dialog.Description>
				<section class="flex justify-end gap-2">
					<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
				</section>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>