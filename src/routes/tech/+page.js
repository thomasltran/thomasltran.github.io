import { loadPosts, paginatePosts } from '$lib/blog.js';
import { browser } from '$app/environment';

// Enable prerendering - this will prerender /tech without query params
export const prerender = true;

export async function load({ url }) {
    // During prerender, always use page 1
    // In browser, read from query params
    let page = 1;
    
    if (browser) {
        page = parseInt(url.searchParams.get('page') || '1', 10);
    }
    
    // Load all tech posts
    const allPosts = await loadPosts('tech');
    
    // Paginate the results
    const { posts, pagination } = paginatePosts(allPosts, page);
    
    return {
        posts,
        pagination,
        category: 'tech'
    };
}