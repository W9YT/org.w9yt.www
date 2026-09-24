<script lang="ts">
	import { page } from "$app/state";

	let {
		title = 'Badger Amateur Radio Society',
		type = 'Website',
		description = 'The Badger Amateur Radio Society (BARS) is the amateur radio club at the University of Wisconsin-Madison',
        locale = 'en_US',
		special = null,
    }: {
		title?: string;
		type?: string;
		description?: string;
        locale?: string;
        special?: "wavelog" | "donate" | "shack" | "join" | null;
	} = $props();


	var buttonItems = [
		{
			"type": 1,
			"components": [
				{
					type: 2,  // ComponentType.BUTTON
					label: "Read More",
					style: 5, // LINK
					url: `https://www.w9yt.org${page.url.pathname}`
				}
			]
		},
		{
			type: 14,
			divider: true,
			spacing: 2
		},
		{
			"type": 1,
			"components": [
				{
					type: 2,  // ComponentType.BUTTON
					style: 5, // LINK
					label: "MyBARS",
					url: "https://w9yt.org/.well-known/change-password",
					emoji: {
						name: "👤"
					}
				},
				{
					type: 2,  // ComponentType.BUTTON
					style: 5, // LINK
					label: "Launch Wavelog",
					url: "https://w9yt.org/?discord-component-embed=wavelog",
					emoji: {
						name: "🎙"
					}
				},
				{
					type: 2,  // ComponentType.BUTTON
					style: 5, // LINK
					label: "Launch Wiki",
					url: "https://w9yt.org/?discord-component-embed=wiki",
					emoji: {
						name: "📖"
					}
				},
			]
		},
	]

	// svelte-ignore state_referenced_locally
	if (special == "wavelog") {
		buttonItems = [
			{
				"type": 1,
				"components": [
					{
						type: 2,  // ComponentType.BUTTON
						label: "Read About Wavelog",
						style: 5, // LINK
						url: `https://www.w9yt.org${page.url.pathname}`,
						emoji: {
							name: "📄"
						}
					},
					{
						type: 2,  // ComponentType.BUTTON
						style: 5, // LINK
						label: "Launch Wavelog",
						url: "https://w9yt.org/?discord-component-embed=wavelog",
						emoji: {
							name: "🎙"
						}
					},
				]
			}
		]
	} else if (special == "donate") {
		buttonItems = [
			{
				"type": 1,
				"components": [
					{
						type: 2,  // ComponentType.BUTTON
						label: "Donate Now",
						style: 5, // LINK
						url: `https://supportuw.org/giveto/AmateurRadio`
					}
				]
			}
		]
	} else if (special == "shack") {
		buttonItems = [
			{
				"type": 1,
				"components": [
					{
						type: 2,  // ComponentType.BUTTON
						label: "Google Maps Walking Directions",
						style: 5, // LINK
						url: `https://maps.google.com/?daddr=43.072608761834815,-89.41162469216303&dirflg=w`,
						emoji: {
							name: "👟"
						}
					},
					{
						type: 2,  // ComponentType.BUTTON
						label: "Google Maps Transit Directions",
						style: 5, // LINK
						url: `https://maps.google.com/?daddr=43.072608761834815,-89.41162469216303&dirflg=r`,
						emoji: {
							name: "🚌"
						}
					},
					{
						type: 2,  // ComponentType.BUTTON
						label: "Finding the Shack",
						style: 5, // LINK
						url: `https://www.w9yt.org${page.url.pathname}`,
						emoji: {
							name: "🏢"
						}
					},

				]
			}
		]
	} else if (special == "join") {
		buttonItems = [
			{
				"type": 1,
				"components": [
					{
						type: 2,  // ComponentType.BUTTON
						style: 5, // LINK
						label: "Discord Server",
						url: "https://discord.gg/bZezMYCH9J"
					},
					{
						type: 2,  // ComponentType.BUTTON
						label: "Joining Info",
						style: 5, // LINK
						url: `https://www.w9yt.org${page.url.pathname}`
					},

				]
			},
		]
	}

	const discordComponent = $derived({
		component: {
		type: 17,
		accent_color: null,
		components: [
			{
				type: 9,
				components: [
					{
						type: 10,
						content: `# ${title}\n\n${description}`
					}
				],
				"accessory": {
					type: 11,  // ComponentType.THUMBNAIL
					media: {
						url: "https://www.w9yt.org/assets/favicon/ms-icon-150x150.png"
					}
				}
            },
			...buttonItems
		]
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="W9YT Badger Amateur Radio Society" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
    <meta property="og:locale" content={locale} />
	<meta property="og:url" content="https://www.w9yt.org{page.url.pathname}">

	<svelte:element this={'script'} id="discord:component-embed" type="application/json">
		{JSON.stringify(discordComponent)}
	</svelte:element>
</svelte:head>
