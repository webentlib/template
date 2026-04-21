import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		typescript: {
			config: (config) => {
				config.include.push('../**/*.ts');
				config.compilerOptions.paths['/*'] = ['../*'];

				// for (const folder of ['lab', 'leg', 'lib']) {
				// 	config.include.push(`../${folder}/**/*.ts`);  // can import others like `import { browser } from '$app/environment';` without warnings
				// 	config.compilerOptions.paths[`/${folder}`] = [`../${folder}`]  // so others can import from that without warnings
				// }
				// for (const file of ['urls.ts']) {
					// // config.include.push(`../${file}`);  // not really needed
					// config.compilerOptions.paths[`/${file}`] = [`../${file}`]  // so others can import from that without warnings
				// }
			}
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		files: {
			assets: 'assets/',
			routes: 'routes/',
			errorTemplate: 'routes/error.html',
		},
	}
};

export default config;
