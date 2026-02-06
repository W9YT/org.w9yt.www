<script lang="ts">
	import { Avatar, Popover, Portal } from '@skeletonlabs/skeleton-svelte';
    import { Mail, XIcon } from '@lucide/svelte';

	let {
		name = 'John Doe',
        salutation = "",
		photo = '',
		department = 'Department of ACME',
		position = 'VP of Operations',
        blurb = "",
        urlPersonal = "",
        urlDepartment = "",
        urlResearch = "",
        address = "",
        email = "",
        phone = "",
	} = $props();
    let initials = $derived(name.split(" ").map(word => word[0]).join("").toUpperCase());
    let emailList = $derived(email.split(","));
</script>

<div class="inline-flex p-2">

    <Popover>
        <Popover.Trigger>
            <div class="block max-w-sm overflow-hidden card border-[1px] border-surface-200-800 preset-filled-surface-100-900 card-hover min-w-80 max-w-screen md:min-w-fit">
                
                <article class="p-3">
                    <section class="grid grid-cols-4">
                        <div class="col-span-1">
                            <Avatar class="size-17 relative">
                                <Avatar.Image src={photo} alt="Profile Photo of {name}" />
                                <Avatar.Fallback class="absolute inset-0 flex items-center justify-center">{initials}</Avatar.Fallback>
                            </Avatar>
                        </div>
                        <div class="col-span-3 text-left pl-4">
                            <h2 class="font-medium text-2xl">{name}</h2>
                            <p class="opacity-75">{position}</p>
                        </div>
                    </section>
                </article>
                
            </div>

        </Popover.Trigger>
        <Portal>
            <Popover.Positioner>
                <Popover.Content class="card w-96 p-4 bg-surface-100-900 shadow-xl">
                    <div class="space-y-4">
                        <header class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">

                            <div>
                                <Popover.Title class="text-lg font-bold">{name} {salutation}</Popover.Title>
                            </div>
                            <Popover.CloseTrigger class="btn-icon hover:preset-tonal self-start absolute top-5 right-5">
                                <XIcon class="size-4" />
                            </Popover.CloseTrigger>
                        </header>
                        <Popover.Description>
                            {department}
                            {#if department.length > 0 && blurb.length > 0}
                                <br><br>
                            {/if}
                            <p style="white-space: pre-line;">
                                {blurb}
                            </p>
                        </Popover.Description>

                        {#if address.length > 0}
                            <div>
                                <p style="white-space: pre-line;">{address}</p>
                            </div>
                        {/if}

                        <div class="flex gap-4">
                            {#if urlPersonal.length > 0}
                                <a href="{urlPersonal}" target="_blank" class="text-sm opacity-60">Personal Website</a>
                            {/if}
                            {#if urlDepartment.length > 0}
                                <a href="{urlDepartment}" target="_blank" class="text-sm opacity-60">Department Website</a>
                            {/if}
                            {#if urlResearch.length > 0}
                                <a href="{urlResearch}" target="_blank" class="text-sm opacity-60">Research Website</a>
                            {/if}
                        </div>
  
                        <div class="inline-flex items-center gap-4">
                            {#if email.length > 0}
                                {#each emailList as emailAddress}
                                    <a href="mailto:{emailAddress}">
                                        <button type="button" class="btn preset-filled mt-1">
                                            <span class="text-sm">
                                                Email
                                                {#if emailList.length > 1}
                                                    ({emailAddress.split("@")[1]})
                                                {/if}
                                            </span>
                                            <Mail size={12} />
                                        </button>
                                    </a>
                                {/each}
                            {/if}
                            {#if phone.length > 0}
                                <p class="text-regular">{phone}</p>
                            {/if}
                        </div>
                    </div>
                    <Popover.Arrow class="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
                        <Popover.ArrowTip />
                    </Popover.Arrow>
                </Popover.Content>
            </Popover.Positioner>
        </Portal>
    </Popover>
</div>
