import { loadPosts, paginatePosts } from '$lib/blog.js';

export async function load({ url }) {
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
