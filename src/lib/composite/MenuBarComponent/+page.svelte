<script lang="ts">
	import { X } from "@lucide/svelte";
	import { AppBar } from "@skeletonlabs/skeleton-svelte";

    let { menuClose = () => {} } = $props();
</script>
		<AppBar class="sticky top-0 z-5">
			<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
				<AppBar.Lead>
					<a href="." class="" onclick={() => menuClose()}>
						<p
							class="px-2 font-(family-name:--font-display) text-2xl font-semibold tracking-widest"
						>
							W9YT
						</p>
						<p class="px-2 font-(family-name:--font-display) text-xs font-medium">
							Badger Amateur Radio Society
						</p>
					</a>
				</AppBar.Lead>

				<AppBar.Trail>
					<!-- Close Button -->
					<button
						class="absolute top-4 right-4 rounded-md p-2 transition-colors hover:bg-surface-200-800"
						onclick={() => menuClose()}
						aria-label="Close menu"
					>
						<X class="size-7" role="none" />
					</button>
				</AppBar.Trail>
			</AppBar.Toolbar>
		</AppBar>