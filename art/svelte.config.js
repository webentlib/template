import adapter from '@sveltejs/adapter-node';  // import adapter from '@sveltejs/adapter-auto';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess({ script: true})],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		files: {
			assets: 'assets/',
			routes: 'router/',
			hooks: {
				server: 'hooks.server.js'
			}
		},
	},
	compilerOptions: {
		runes: true,
		// experimental: {
		// 	async: true,
		// },
        warningFilter: (warning) => {
			const messages = [
				'is not a valid href attribute',
				'Empty block',
				'Unused CSS selector',
				'A form label must be associated with a control'
			]
			for (const message of messages) {
				if (warning.message.includes(message)) {
					return false
				}
			}
			return true
        },
	},
};

export default config;
