import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import addClasses from 'rehype-add-classes';

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathNewsPost = join(__dirname, './src/lib/svx-layout/news-post.svelte');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	preprocess: [mdsvex({
		layout: {
			newsPost: pathNewsPost,
			_: pathNewsPost
		},
		rehypePlugins: [
			[
				addClasses,
				{
					h1: 'text-4xl font-medium pb-2 pt-4',
					h2: 'text-3xl font-medium pb-2 pt-4',
					h3: 'text-2xl font-medium pb-2 pt-4',
					h4: 'text-xl pb-2 pt-4',
					h5: 'text-lg pb-2 pt-4',
					h6: 'text-base pb-2 pt-4',
					p: 'py-3',
					ul: `list-inside list-disc pl-3`,
					ol: 'list-inside list-decimal ml-3',
					a: 'underline hover:underline-offset-1'
				}
			]
		]

	})],
	extensions: ['.svelte', '.svx']
};

export default config;
