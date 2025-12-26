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
            fallback: 'index.html', // SPA fallback for client-side routing
            precompress: false,
            strict: true
        }),
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore pagination errors during prerender
                // Pagination will work client-side
                if (path.includes('?page=')) {
                    console.warn(`Ignoring prerender error for pagination: ${path}`);
                    return;
                }
                throw new Error(message);
            },
            handleUnseenRoutes: 'ignore' // Ignore unseen dynamic routes - they'll be handled by fallback
        }
    },
    extensions: ['.svelte', '.svx', ...mdsvexConfig.extensions]
};

export default config;