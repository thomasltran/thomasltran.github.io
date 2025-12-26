import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],

    smartypants: {
        dashes: 'oldschool'
    },

    remarkPlugins: [],
    rehypePlugins: [],

    layout: {
        // Optional: You can define custom layouts per category
        // tech: './src/lib/layouts/tech.svelte',
        // gym: './src/lib/layouts/gym.svelte',
    }
});

export default config;
