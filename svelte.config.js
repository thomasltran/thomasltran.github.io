import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore pagination errors during prerender
                // Pagination will work client-side
                if (path.includes('?page=')) {
                    return;
                }
                throw new Error(message);
            }
        }
    },
    extensions: ['.svelte', '.svx', ...mdsvexConfig.extensions]
};

export default config;