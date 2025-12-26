import { loadPosts, paginatePosts } from '$lib/blog.js';
import { browser } from '$app/environment';

// Enable prerendering - this will prerender /gym without query params
export const prerender = true;

export async function load({ url }) {
    // During prerender, always use page 1
    // In browser, read from query params
    let page = 1;
    
    if (browser) {
        page = parseInt(url.searchParams.get('page') || '1', 10);
    }
    
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