import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        // Dynamically import the markdown file
        const post = await import(`../markdown/${params.slug}.md`);
        
        return {
            content: post.default,
            metadata: post.metadata,
            slug: params.slug
        };
    } catch (e) {
        throw error(404, `Post not found: ${params.slug}`);
    }
}
