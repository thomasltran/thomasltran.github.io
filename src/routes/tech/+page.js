import { loadPosts, paginatePosts } from '$lib/blog.js';

// Disable prerendering for this page since it uses query params
export const prerender = false;

export async function load({ url }) {
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    
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