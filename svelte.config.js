import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			test: {
				environment: 'jsdom', 
				include: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], 
				globals: true,
				setupFiles: 'src/setupTests.ts',
			},
		},
	},
};

export default config;
