import { loadPosts, paginatePosts } from '$lib/blog.js';

// Enable prerendering - this will prerender /gym without query params
export const prerender = true;

export async function load({ url }) {
    // During prerender, url.searchParams won't work, so default to page 1
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    
    // Load all gym posts
    const allPosts = await loadPosts('gym');
    
    // Paginate the results
    const { posts, pagination } = paginatePosts(allPosts, page);
    
    return {
        posts,
        pagination,
        category: 'gym'
    };
}