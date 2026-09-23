<script lang="ts">
	import { onMount } from "svelte";
	import {
		initAuth,
		initialized,
		authenticated,
		user,
		login,
		logout,
		authError,
		reCheckAuth,
		registerAccount,
		accountManagement
	} from '$lib/auth/auth';
	import menuLoginData from '$lib/menus/login-target.json';
    import MenuBarComponent from '$lib/composite/MenuBarComponent/+page.svelte'
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
	import { User, ShieldQuestionMark, XIcon, LogIn, UserPlus, UserCog, BotMessageSquare, Ellipsis, UsersRound, Info, ExternalLink } from '@lucide/svelte';
	import { slide } from "svelte/transition";

    let showEmail = $state(false);

	function initials(name?: string) {
		if (!name) return '';

		return name
			.split(' ')
			.map((part) => part[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	}

    let {isOpen = $bindable(false)} = $props();

	onMount(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.has('discord-component-embed')) {
            const embedSelection = params.get('discord-component-embed');
            if (embedSelection != null) {
                const result = menuLoginData.find(item => item.query === embedSelection);
                window.location.replace(result?.link.toString() ?? "https://www.w9yt.org");
                return;
            }
            
        }

		initAuth();

			let checking = false;
			const interval = setInterval(async () => {
				if (checking) return;

				checking = true;

				try {
					await reCheckAuth();
				} finally {
					checking = false;
				}
			}, 30_000);

			return () => clearInterval(interval);
	});
</script>
{#if !$initialized}
    <div class="placeholder size-8 animate-pulse [animation-duration:1s] hidden sm:block w-28 justify-center hidden sm:block"></div>
{:else if $authError}
    <div class="rounded-md p-2 px-3 transition-colors hover:bg-surface-200-800 hidden sm:block">


        <Popover>
            <Popover.Trigger aria-label="Authentication status unknown"><ShieldQuestionMark class="inline size-5" role="none" /></Popover.Trigger>
            <Portal>
                <Popover.Positioner class="z-20!">
                    <Popover.Content class="card w-96 p-4 bg-surface-100-900 shadow-xl" aria-label="Authentication status error details">
                        <div class="space-y-4">
                            <header class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                                <div>
                                    <b>Auth Status Unknown</b>
                                </div>
                                <div>

                                </div>
                                <Popover.CloseTrigger class="btn-icon hover:preset-tonal self-start" aria-label="Close">
                                    <XIcon class="size-4" role="none" />
                                </Popover.CloseTrigger>
                            </header>
                            <Popover.Description>
                                <p>
                                    There was an error fetching your authentication status.
                                </p>
                                <br>
                                <p>
                                    To log out, visit <button class="underline" onclick={() => accountManagement()}>manage account</button>,
                                    select your name from the top right, then click 'Sign out'.
                                </p>
                            </Popover.Description>
                        </div>
                        <Popover.Arrow class="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
                            <Popover.ArrowTip />
                        </Popover.Arrow>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover>
    </div>
{:else if $authenticated}

    <button
        class="rounded-md p-2 transition-colors hover:bg-surface-200-800 hidden sm:block"
        onclick={() => (isOpen = true)}
        aria-label="Open menu"
    >
        <User class="inline" role="none" /> 
        <span class="hidden sm:inline xl:hidden">{initials($user?.name) ?? $user?.username} </span>
        <span class="hidden xl:inline">{$user?.name ?? $user?.username} </span>&emsp14;
    </button>


{:else}
    <button
        class="rounded-md p-2 transition-colors hover:bg-surface-200-800 hidden sm:block"
        onclick={() => (isOpen = true)}
        aria-label="Open menu"
    >
        <User class="inline" role="none" /> 
        My BARS&emsp14;
    </button>

{/if}

<!-- Fullscreen Menu Overlay -->
{#if isOpen}
    <div
        data-nosnippet
        class="fixed inset-0 z-50 flex flex-col bg-white dark:bg-black max-h-screen overflow-y-scroll scrollbarHide"
        transition:slide={{ axis: 'y', duration: 300 }}
    >
        <MenuBarComponent menuClose={() => isOpen = false} />

        <!-- Menu Content -->
        <nav class="text-2xl font-semibold md:text-3xl">
            {#if initialized}


                <div class="mx-auto max-w-fit py-5 text-center">
                    {#if $authenticated}
                        Welcome, {$user?.name} 
                        <br>
                        <button onclick={logout} class="rounded-md px-3 py-2 hover:bg-surface-200-800 text-lg mt-2">Log Out</button>
                    {:else}
                        <button onclick={() => login(null)} class="rounded-md px-3 py-2 hover:bg-surface-200-800 text-lg mt-2 bg-surface-100-900">Log In to W9YT.org</button>
                    {/if}
                </div>

                <div data-nosnippet class="grid w-full max-w-[1400px] mx-auto grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 px-4">
                    <!-- Register -->
                    {#if !$authenticated}
                    <div class="m-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                        <h3 class="mb-5 flex items-center justify-center gap-2 text-xl font-semibold">
                            <UserPlus size={20} role="none" />
                            Register
                        </h3>

                        <div class="space-y-2">
                            <button
                                value="registerDiscord"
                                class="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-surface-200-800 font-normal text-lg text-left"
                                onclick={() => login('discord-il')}
                            >
                                <BotMessageSquare size={18} role="none" />
                                With Discord
                            </button>

                            <button
                                value="registerUsername"
                                class="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-surface-200-800 font-normal text-lg text-left"
                                onclick={registerAccount}
                            >
                                <User size={18} role="none" />
                                With Username
                            </button>

                            <button
                                value="registerOther"
                                class="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-surface-200-800 font-normal text-lg text-left"
                                onclick={() => login(null)}
                            >
                                <Ellipsis size={18} role="none" />
                                With Other Provider
                            </button>
                        </div>
                    </div>
                    {:else}
                    <div class="m-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700 text-lg">
                        <h3 class="mb-5 flex items-center justify-center gap-2 text-xl font-semibold">
                            <Info size={20} role="none" />
                            Your Info
                        </h3>
                        <p class="py-2">
                            Username: &emsp13;<span class="font-light">{$user?.username}</span>
                        </p>
                        <p class="py-2">
                            Name: &emsp13;<span class="font-light">{$user?.name}</span>
                        </p>
                        <p class="py-2">
                            Callsign: &emsp13;<span class="font-light">{$user?.callsign ?? '\u2205'}</span>
                        </p>
                        <!-- <p class="py-2">
                            Email: &emsp13;
                            {#if showEmail}
                                <button class="font-light" onclick={() => showEmail = false}>{$user?.email ?? "-"}</button>
                            {:else}
                                <button
                                    type="button"
                                    class="font-light underline"
                                    onclick={() => showEmail = true}
                                >
                                    Click to reveal
                                </button>
                            {/if}
                        </p> -->

                    </div>
                    {/if}

                    <!-- Profile -->
                    <div class="m-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                        <h3 class="mb-5 flex items-center justify-center gap-2 text-xl font-semibold">
                            <User size={20} role="none" />
                            Manage Profile
                        </h3>

                        <div class="space-y-2">
                            <button
                                onclick={() => accountManagement()}
                                class="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-surface-200-800 font-normal text-lg text-left"
                            >
                                <UserCog size={18} role="none" />
                                BARS Profile
                            </button>
                            
                            <button
                                value="profile"
                                onclick={() => window.location.href = "https://win.wisc.edu/bars/"}
                                class="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-surface-200-800 font-normal text-lg text-left"
                            >
                                <UsersRound size={18} role="none" />
                                Wisconsin Involvement Network
                            </button>
                        </div>
                    </div>

                    <!-- Log In -->
                    <div class="m-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                        <h3 class="mb-5 flex items-center justify-center gap-2 text-xl font-semibold">
                            <LogIn size={18} role="none" />
                            Launch App
                        </h3>

                        <div class="space-y-2">
                            {#each menuLoginData as item}
                                <button
                                    class="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-surface-200-800 font-normal text-lg text-left"
                                    onclick={() => window.location.href = item.link}
                                >
                                    <ExternalLink size={18} role="none" />
                                    {item.label}
                                </button>
                            {/each}
                        </div>
                    </div>
                </div>
            {/if}
        </nav>
    </div>

{/if}