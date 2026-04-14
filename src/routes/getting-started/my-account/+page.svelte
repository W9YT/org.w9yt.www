<script>
	import IamSupport from '$lib/composite/+iam-support.svelte';
	import { ArrowRightIcon, ChevronRight } from '@lucide/svelte';
</script>

<svelte:head>
	<meta property="og:title" content="My BARS Account | Badger Amateur Radio Society" />
	<title>My BARS Account | Badger Amateur Radio Society</title>
	<meta name="description" content="My BARS Account | Badger Amateur Radio Society" />
	<meta name="robots" content="none" />
</svelte:head>

<div class="mx-auto max-w-3xl px-5 pt-10 text-lg">
	<h2 class="pb-10 text-4xl/9 font-semibold md:text-4xl/15">Your BARS Account & Profile</h2>

	<p class="py-4">
		Your Badger Amateur Radio Society account gives you access to BARS resources, like our Wiki and
		logging software.
	</p>
	<p class="py-4">
		If you're looking to manage your profile, click the button below. To create an account, select 
        <span class="italic">create an account</span> after clicking the button below.
	</p>

	<button
		type="button"
		class="mt-5 btn preset-filled-warning-200-800 py-2"
		onclick={() => window.open('/.well-known/manage-account-no-robot.html', '_blank')}
	>
		<span>Manage profile & account</span>
		<ChevronRight size={18} role="none" />
	</button>

	<h3 class="pt-6 text-2xl/7 font-semibold md:text-3xl/12">UW-Madison Network</h3>
	<p class="py-4">
        Accounts made off-campus (and disconnected from WiscVPN) are limited by default.
    </p>
	<p class="py-4">
        To remove the limit, sign in while on the UW-Madison campus or while connected to the UW-Madison VPN, WiscVPN.
        If you're unable to use the UW-Madison network contact <IamSupport/>.
    </p>

    <h3 class="pt-6 text-2xl/7 font-semibold md:text-3xl/12">Forgot Password or Username</h3>
	<p class="py-4">
        If you included your email in your profile, select <span class="italic">forgot your password</span> 
        after clicking the manage profile & account button above.
    </p>
    <p class="py-4">
        If you did not include a email in your profile, contact <IamSupport/> from one of the following email addresses, 
        listed in preferential order:
    </p>
    <ol class="list-decimal list-inside">
        <li>UW-Madison email address</li>
        <li>Personal address with your <b>arrl.net</b> address in the body</li>
        <li>Email address listed on QRZ</li>
        <li>Other email address</li>
    </ol>

    <p class="pb-10"></p>
</div>
