<script lang="ts">
	const tableData = [
		{ name: 'Amazon Web Services (AWS), Amazon.com, Inc.', role: 'Cloud Services', address: '410 Terry Avenue N, Seattle, WA 98109, USA' },
		{ name: 'Migadu-Mail GmbH', role: 'Cloud Services', address: 'Rohnen 587 CH-9414 Schachen Switzerland' },
		{ name: 'University of Wisconsin Foundation', role: 'Financial Services', address: 'University of Wisconsin Foundation 1848 University Avenue Madison, WI 53726-4090 USA' },
		{ name: 'University of Wisconsin-Madison', role: 'Organizational Services, Compute Services', address: '1415 Engineering Drive Madison, WI 53706 USA' },
		{ name: 'UW Credit Union', role: 'Banking and Financial Services', address: 'UW Credit Union PO Box 44963 Madison, WI 53744-4963 USA' },

	];
</script>

<svelte:head>
	<meta property="og:title" content="Privacy Policy | Badger Amateur Radio Society" />
	<title>Privacy Policy | Badger Amateur Radio Society</title>
	<meta name="description" content="Privacy Policy | Badger Amateur Radio Society" />
	<meta name="robots" content="none" />
</svelte:head>

<div class="mx-auto max-w-4xl px-5 pt-10 text-lg">
	<h2 class="pb-10 text-4xl/9 font-semibold md:text-4xl/15">
		Badger Amateur Radio Society Privacy Policy
	</h2>

	<div class="max-w-2xl">
		<p class="py-2">Last Updated: 6th February 2026</p>

		<p class="py-2">
			This Privacy Notice for Badger Amateur Radio Society and its affiliates ("we," "us," or
			"our"), describes how and why we might access, collect, store, use, and/or share ("process")
			your personal information when you use our services ("Services").
		</p>

		<h3 class="pt-3 text-xl font-medium">Users of our websites and applications</h3>

		<p class="py-2">
			This section describes our privacy practices for 
			<a href="https://www.w9yt.org">www.w9yt.org</a>
			and other Badger Amateur Radio Society
			websites. 
		</p>
		<p class="py-2">
			We may provide a separate privacy policy for certain websites and
			applications that we operate, and where we do so, such privacy statement will apply to our
			collection and use of personal information collected through such websites and applications.
		</p>
		<p class="py-2">
			When you access or otherwise use our Site, we do not collect individual information about you or how you
			interact with our Site. To secure our Site we log anonymous information about your IP address, browser,
			and internet service provider.
		</p>
		<p class="py-2">
			We use the information we collect as described above for securing our Sites. Information is not used
			for marketing and is not sold to third parties. We will retain information collected for as long as 
			necessary to secure our Site.
		</p>
		<p class="py-2">
			For <a href="https://wiki.w9yt.org">wiki.w9yt.org</a> please visit the 
			<a class="underline" href="https://wiki.w9yt.com/wiki/BARS:Privacy_policy">BARS Wiki Privacy Policy</a>. 
			Policies for information collection, retention, and distribution in the BARS Wiki Privacy Policy supersedes 
			this privacy policy when the stated collection scope, retention period, or distribution is greater.
		</p>

		<h3 class="pt-3 text-xl font-medium">Individuals who use our facilities</h3>
		<p class="py-2">
			Please see <a href="https://www.cae.wisc.edu/policies/" class="underline">Computer Aided Engineering Policies & Guidelines</a> and the 
			<a href="https://www.wisconsin.edu/regents/policies/acceptable-use-of-information-technology-resources/" class="underline">UW System policy for use of Information Technology</a>.
		</p>


		<h3 class="pt-3 text-xl font-medium">Individuals who get in touch with us</h3>
		<p class="py-2">
			We collect personal information when an individual, business, or organization gets in touch with us 
			using email, telephone, mail, social media, courier, or radio.
		</p>
		<p class="py-2">
			We collect information such as name, contact details, email, physical address, FCC identifiers, 
			contact preferences, usernames, and location. We will use the information for the purpose of 
			responding to and keeping a record of the communication; as well as future communications for 
			business purposes like fundraising.
		</p>
		<p class="py-2">
			We will only disclose personal information to others for legitimate business purposes like fundraising and
			payment processing. The following are organizations that provide applications, data processing, 
			banking, or IT services to us:
		</p>
		<div class="table-wrap">
			<table class="table caption-bottom">
				<tbody class="[&>tr]:hover:preset-tonal-primary">
					{#each tableData as row}
						<tr>
							<td>{row.name}</td>
							<td>{row.role}</td>
							<td>{row.address}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="py-2">
			Information and communication sent via electronic or physical QSL cards may be made public on
			Badger Amateur Radio Sites, or on public archival sites like Archive.org, www.loc.gov, and www.wisconsinhistory.org.
		</p>

		<h3 class="pt-3 text-xl font-medium">Individuals who have a BARS account</h3>
		<p class="py-2">
			Individuals may create a BARS account for purposes like contributing to the Wiki. 
			Please see the account service provider  
			<a href="https://www.hadleyso.com/privacy-policy/" class="underline">privacy policy</a> and 
			<a href="https://www.hadleyso.com/terms/" class="underline">terms of use</a>.
		</p>

		<h3 class="pt-3 text-xl font-medium">Changes to this policy</h3>
		<p class="py-2">
			Badger Amateur Radio Society may update this privacy policy from time to time to reflect
			changing requirements or updated operational practices. Any changes will be posted on this Site 
			and will be effective as of the last updated date.
		</p>

		<h3 class="pt-3 text-xl font-medium">Contact Us</h3>
		<p class="py-2">
			If you have questions about this privacy policy or about our privacy practices, 
			please <a href="/contact/" class="underline">contact us</a>.
		</p>

		<p class="pb-15"></p>
	</div>
</div>
